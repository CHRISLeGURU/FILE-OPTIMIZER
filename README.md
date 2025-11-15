## ❗ The Problem
Modern websites often load slowly because of **large, unoptimized images**.  
Photos taken with phones or cameras can easily be **5–15 MB**, causing:

- Slow page loading  
- High bandwidth usage  
- Poor SEO performance  
- Bad user experience, especially on mobile or weak networks  

Even if images are hosted on an external server or CDN, the browser still downloads the **full file size**.

> **Hosting an image does NOT optimize it.**  
> A 10 MB file is still a 10 MB download.

---

## ✅ The Solution
This Node.js script automatically **compresses**, **resizes**, and **converts** images into the modern **WebP** format using the Sharp library.

The script:

- Reduces image size by **70%–95%**
- Keeps strong visual quality  
- Resizes large images (max width: 1600px)
- Converts images to `.webp` for optimal performance  
- Processes an entire folder automatically  

Your website becomes faster, more efficient, and performs better on SEO.

---

## 📦 How to Use the Script

### 1. Clone the projet 
### 2. install all the dependecies with npm install
### 3. create two folder in the main directory : use this two names **"originals_pictures"**
and **"optimized_pictures"**, 
### 4. Add your images in originals_pictures folder.
### 5. Run the optimization script : All optimized images will appear in the output folder (optimized_picture) as .webp.


---
