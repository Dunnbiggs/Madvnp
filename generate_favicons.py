from PIL import Image
import os

source_path = r"C:\Users\mike\.gemini\antigravity\brain\63de8fc8-f827-47e8-8e2c-dc5cc71c6773\uploaded_media_1771365494764.jpg"
dest_dir = r"C:\Users\mike\.gemini\antigravity\scratch\madvnp-website\public"

sizes = [
    (16, 16, "favicon-16x16.png"),
    (32, 32, "favicon-32x32.png"),
    (180, 180, "apple-touch-icon.png"),
    (192, 192, "android-chrome-192x192.png"),
    (512, 512, "android-chrome-512x512.png")
]

try:
    img = Image.open(source_path)
    
    # Ensure it's square by cropping if necessary, though logo should be square-ish
    # We'll just resize ensuring high quality
    
    # Generate PNGs
    for w, h, name in sizes:
        resized = img.resize((w, h), Image.Resampling.LANCZOS)
        resized.save(os.path.join(dest_dir, name))
        print(f"Generated {name}")

    # Generate ICO (16, 32, 48)
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    ico_imgs = []
    for w, h in ico_sizes:
        ico_imgs.append(img.resize((w, h), Image.Resampling.LANCZOS))
    
    ico_path = os.path.join(dest_dir, "favicon.ico")
    ico_imgs[0].save(ico_path, format='ICO', sizes=ico_sizes, append_images=ico_imgs[1:])
    print("Generated favicon.ico")

except Exception as e:
    print(f"Error: {e}")
