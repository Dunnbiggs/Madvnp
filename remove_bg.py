from rembg import remove
from PIL import Image
import os

input_path = r"C:\Users\mike\.gemini\antigravity\scratch\madvnp-website\public\michael-marshall.jpg"
output_path = r"C:\Users\mike\.gemini\antigravity\scratch\madvnp-website\public\michael-marshall.png"

try:
    print(f"Processing {input_path}...")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print(f"Background removed. Saved to {output_path}")
except Exception as e:
    print(f"Error: {e}")
