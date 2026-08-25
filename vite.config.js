import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { FAQS } from './src/data/faqs.js'

/**
 * Injects FAQPage structured data built from the same array the FAQ section
 * renders. Google requires the answer in the markup to match the answer a
 * visitor actually sees; generating it here means the two cannot drift.
 */
function faqStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a.join(' ')
      }
    }))
  }

  return {
    name: 'faq-structured-data',
    transformIndexHtml() {
      return [{
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        // Escaping "</" keeps a stray closing tag in the copy from ending the script
        children: JSON.stringify(schema).replace(/<\//g, '<\\/'),
        injectTo: 'head'
      }]
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    faqStructuredData(),
    viteCompression({ algorithm: 'gzip' })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
