import os
import glob
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_favicon_pngs():
    public_dir = "/Users/emmanuel/Desktop/Duokim/Duokimaxis/public"
    
    # 1. Base logo render on dark background
    sizes = [
        ("favicon-16x16.png", (16, 16)),
        ("favicon-32x32.png", (32, 32)),
        ("apple-touch-icon.png", (180, 180)),
    ]

    for filename, (w, h) in sizes:
        img = Image.new("RGBA", (w, h), (13, 28, 35, 255))
        draw = ImageDraw.Draw(img)
        
        # Draw sleek stylized emblem (orange brand accent)
        padding = max(2, w // 8)
        # Background rounded box effect
        margin = max(1, w // 10)
        draw.rounded_rectangle([margin, margin, w - margin, h - margin], radius=max(2, w // 6), fill=(13, 28, 35, 255))
        
        # Diagonal brand slash
        draw.polygon([
            (w * 0.2, h * 0.2),
            (w * 0.8, h * 0.2),
            (w * 0.5, h * 0.85),
            (w * 0.2, h * 0.85)
        ], fill=(250, 69, 23, 255))

        draw.polygon([
            (w * 0.5, h * 0.15),
            (w * 0.85, h * 0.15),
            (w * 0.7, h * 0.75),
            (w * 0.35, h * 0.75)
        ], fill=(255, 255, 255, 255))

        out_path = os.path.join(public_dir, filename)
        img.save(out_path, "PNG", optimize=True)
        print(f"Created {filename} ({w}x{h})")

    # Save favicon.ico
    img32 = Image.open(os.path.join(public_dir, "favicon-32x32.png"))
    img32.save(os.path.join(public_dir, "favicon.ico"), format="ICO")
    print("Created favicon.ico")

def create_og_image():
    public_dir = "/Users/emmanuel/Desktop/Duokim/Duokimaxis/public"
    w, h = 1200, 630
    
    # Dark modern canvas
    img = Image.new("RGBA", (w, h), (10, 19, 24, 255))
    draw = ImageDraw.Draw(img)

    # Ambient glowing background circles
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([800, -100, 1300, 400], fill=(250, 69, 23, 40))
    glow_draw.ellipse([-200, 300, 400, 900], fill=(250, 69, 23, 25))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Draw card container
    margin_x, margin_y = 60, 50
    draw.rounded_rectangle(
        [margin_x, margin_y, w - margin_x, h - margin_y],
        radius=36,
        fill=(13, 28, 35, 230),
        outline=(51, 65, 85, 255),
        width=2
    )

    # Draw Brand Logo Box
    logo_size = 72
    logo_x, logo_y = 120, 110
    draw.rounded_rectangle(
        [logo_x, logo_y, logo_x + logo_size, logo_y + logo_size],
        radius=18,
        fill=(250, 69, 23, 255)
    )

    # Diagonal emblem mark inside logo
    draw.polygon([
        (logo_x + 18, logo_y + 16),
        (logo_x + 54, logo_y + 16),
        (logo_x + 36, logo_y + 56),
        (logo_x + 18, logo_y + 56)
    ], fill=(13, 28, 35, 255))

    # Badge Pill
    draw.rounded_rectangle([120, 215, 460, 255], radius=20, fill=(250, 69, 23, 30), outline=(250, 69, 23, 100), width=1)
    
    # Save OG Image
    og_path = os.path.join(public_dir, "og-image.png")
    img.save(og_path, "PNG", optimize=True)
    print(f"Created og-image.png ({w}x{h})")

def compress_existing_images():
    base_dir = "/Users/emmanuel/Desktop/Duokim/Duokimaxis/public/assets"
    
    image_paths = []
    for root, _, files in os.walk(base_dir):
        for f in files:
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.avif')):
                image_paths.append(os.path.join(root, f))

    print(f"Found {len(image_paths)} images to compress...")
    for path in image_paths:
        orig_size = os.path.getsize(path)
        try:
            im = Image.open(path)
            # Re-save with optimization
            if path.lower().endswith('.png'):
                im.save(path, 'PNG', optimize=True)
            elif path.lower().endswith(('.jpg', '.jpeg')):
                im.save(path, 'JPEG', quality=85, optimize=True)
            
            # Also generate a WebP version for maximum compression
            webp_path = os.path.splitext(path)[0] + '.webp'
            im.save(webp_path, 'WEBP', quality=85)
            
            new_size = os.path.getsize(path)
            webp_size = os.path.getsize(webp_path)
            print(f"Compressed {os.path.basename(path)}: Orig={orig_size//1024}KB -> PNG={new_size//1024}KB, WebP={webp_size//1024}KB")
        except Exception as e:
            print(f"Failed to process {path}: {e}")

if __name__ == "__main__":
    create_favicon_pngs()
    create_og_image()
    compress_existing_images()
