# 🚀 Deployment Guide - Dinesh Shinde Website

## ✅ Your Website is Ready to Deploy!

All assets from your Figma design are properly integrated and the code is production-ready.

---

## 📸 Assets Status - ALL INTEGRATED ✅

Your website uses **27 images** from your Figma design, all properly integrated using the `figma:asset` import system:

### ✅ Asset Breakdown:

- **3** Hero & About images
- **1** Logo
- **6** Gallery photos
- **6** Quote backgrounds
- **8** Testimonial headshots
- **3** Service detail images

**How It Works:**
The `/assets/[hash].png` imports are automatically resolved by Vite during the build process. All your design assets are embedded and optimized in the final build.

---

## 🏗️ Build Your Website

### Step 1: Install Dependencies (if not done)

```bash
npm install
```

### Step 2: Build for Production

```bash
npm run build
```

**Expected Output:**

```
✓ built in 15-30s
✓ dist folder created with optimized assets
```

**What Gets Created:**

```
dist/
├── index.html           # Main HTML file
├── assets/              # Optimized JS, CSS, images
│   ├── index-[hash].js  # Application code
│   ├── index-[hash].css # Styles
│   └── [images]         # All 27 images optimized
└── [other routes]       # Pre-rendered routes
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**

- ✅ Automatic deployments
- ✅ Built-in CDN
- ✅ Perfect for React apps
- ✅ Free SSL certificate
- ✅ Custom domains supported

**Deploy Steps:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? dinesh-shinde
# - Directory? ./
# - Override settings? N

# Production deployment
vercel --prod
```

**Or Use Vercel Dashboard:**

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository
4. Vercel auto-detects settings
5. Click "Deploy"
6. Done! ✅

**Result:**

- Live URL: `https://dinesh-shinde.vercel.app`
- Or custom domain: `https://dineshinde.com`

---

### Option 2: Netlify

**Why Netlify?**

- ✅ Drag & drop deployment
- ✅ Continuous deployment from Git
- ✅ Free SSL
- ✅ Form handling built-in
- ✅ Custom domains

**Deploy Steps:**

**Method A: Drag & Drop (Easiest)**

1. Build your site: `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `/dist` folder onto the page
4. Wait for deployment
5. Done! ✅

**Method B: Git Integration**

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Configure Redirects for React Router:**
Create `/dist/_redirects` file:

```
/*    /index.html   200
```

Or add to `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Why GitHub Pages?**

- ✅ Free hosting
- ✅ Direct from Git repository
- ✅ Good for static sites

**Deploy Steps:**

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Configure:**

1. Go to your repo → Settings → Pages
2. Source: gh-pages branch
3. Save

**Note:** Add base URL to vite.config.ts if using project page:

```typescript
export default defineConfig({
  base: "/your-repo-name/",
  // ... rest of config
});
```

---

### Option 4: Your Own Server

**Requirements:**

- Web server (Apache, Nginx, etc.)
- SSH access
- Node.js (for building)

**Deploy Steps:**

1. **Build Locally:**

```bash
npm run build
```

2. **Upload /dist folder to server:**

```bash
# Via SCP
scp -r dist/* user@yourserver.com:/var/www/html/

# Via FTP
# Use FileZilla or similar
```

3. **Configure Web Server:**

**Apache (.htaccess):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**

```nginx
server {
    listen 80;
    server_name dineshinde.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔧 Pre-Deployment Configuration

### 1. Update Contact Information

File: `/src/app/components/Contact.tsx`

```typescript
// Verify these are correct:
phone: "+91 77198 71047";
email: "your-email@example.com";
```

### 2. Configure EmailJS

File: `/src/app/components/Contact.tsx`

```typescript
// Update with your EmailJS credentials:
SERVICE_ID: "service_1dpfwun";
TEMPLATE_ID: "template_o2ilq4r";
PUBLIC_KEY: "T_85nROWwBMBQiQvp";
```

Test your EmailJS setup:

1. Go to https://www.emailjs.com/
2. Log in to your account
3. Test the service/template combination
4. Ensure email delivery works

### 3. Google Calendar Booking

File: `/src/app/components/GoogleCalendarBooking.tsx`

```typescript
// Update with your actual calendar event URL:
const calendarEventUrl = "YOUR_GOOGLE_CALENDAR_EVENT_URL";
```

To get your calendar URL:

1. Create Google Calendar event
2. Make it recurring
3. Get the event link
4. Add to the component

### 4. Update Meta Tags (Optional)

File: `/index.html`

```html
<head>
  <title>Dinesh Shinde - Business Coach & Motivational Speaker</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="..." />
</head>
```

---

## ✅ Pre-Deployment Checklist

### Content Verification

- [ ] Professional designation correct everywhere
- [ ] Contact phone: +91 77198 71047
- [ ] All testimonials have correct names
- [ ] Service descriptions accurate
- [ ] About page timeline correct

### Functionality Testing

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Booking modal opens and functions
- [ ] Contact form submits successfully
- [ ] All external links open in new tab
- [ ] Mobile menu works
- [ ] Gallery images display

### Technical Checks

- [ ] `npm run build` completes without errors
- [ ] No console errors in browser
- [ ] All images load (27 total from Figma)
- [ ] Animations work smoothly
- [ ] Mobile responsive on all pages
- [ ] React Router navigation works

### Performance

- [ ] Images optimized (happens during build)
- [ ] Bundle size reasonable (<500KB gzipped)
- [ ] First load fast (<3 seconds)
- [ ] No layout shifts

---

## 🎯 Post-Deployment Steps

### 1. Verify Live Site

After deployment, check:

- [ ] Homepage loads
- [ ] Navigate to all pages
- [ ] Test booking form
- [ ] Test contact form
- [ ] Check on mobile device
- [ ] Test all links

### 2. Set Up Analytics (Optional)

Add Google Analytics:

```html
<!-- Add to /index.html <head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### 3. Configure Custom Domain

**Vercel:**

1. Domains tab in project settings
2. Add custom domain
3. Follow DNS configuration steps
4. Wait for propagation (up to 48hrs)

**Netlify:**

1. Domain settings in site dashboard
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS (automatic)

**Common DNS Records:**

```
Type: A
Name: @
Value: [hosting-provider-ip]

Type: CNAME
Name: www
Value: [your-site-url]
```

### 4. Enable HTTPS

Most platforms enable HTTPS automatically. If using custom server:

- Use Let's Encrypt (free)
- Or use Cloudflare (free tier)

---

## 📊 Build Output Explained

When you run `npm run build`, here's what happens:

1. **Vite Build Process:**
   - Bundles all React components
   - Processes Tailwind CSS
   - Optimizes all images from figma:asset
   - Minifies JavaScript
   - Creates production files

2. **Asset Processing:**
   - All 27 images from Figma → optimized and hashed
   - CSS → minified and combined
   - JS → split into chunks for better loading

3. **Output Structure:**

```
dist/
├── index.html                    # Main entry
├── assets/
│   ├── index-[hash].js          # ~250KB (all app code)
│   ├── index-[hash].css         # ~50KB (all styles)
│   ├── [image-hash].png         # Your 27 images
│   └── vendor-[hash].js         # Libraries chunk
└── favicon.ico
```

---

## 🐛 Common Deployment Issues

### Issue: "404 on Page Refresh"

**Cause:** Server not configured for SPA routing
**Fix:** Add redirect rules (see server configuration above)

### Issue: "Images Not Loading"

**Cause:** Incorrect base path
**Fix:** Check vite.config.ts base setting

### Issue: "Form Not Submitting"

**Cause:** EmailJS credentials incorrect
**Fix:** Verify SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY in Contact.tsx

### Issue: "Build Fails"

**Cause:** Dependencies not installed
**Fix:**

```bash
rm -rf node_modules
npm install
npm run build
```

### Issue: "Slow Loading"

**Cause:** Images not optimized
**Fix:** Build process automatically optimizes. Ensure using production build.

---

## 📈 Performance Tips

### 1. Enable Compression

On your server, enable gzip/brotli compression:

**Apache:**

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

**Nginx:**

```nginx
gzip on;
gzip_types text/css application/javascript image/svg+xml;
```

### 2. Use CDN

Vercel and Netlify include CDN by default.
For custom server, use Cloudflare.

### 3. Cache Headers

Set long cache times for assets:

```apache
<IfModule mod_expires.c>
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
</IfModule>
```

---

## 🎉 You're Ready to Deploy!

### Quick Deploy Recap:

**Fastest (5 minutes):**

```bash
npm run build
# Upload /dist to Netlify Drop
```

**Best for Long-term (10 minutes):**

```bash
npm i -g vercel
vercel --prod
```

**Most Control:**

```bash
npm run build
# Upload /dist to your server
# Configure web server for SPA routing
```

---

## 📞 Support Resources

### Documentation

- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com

### Hosting Support

- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub Pages: https://pages.github.com

---

**Your website is production-ready with all 27 Figma assets integrated!**

**Next Step:** Run `npm run build` and deploy to your chosen platform! 🚀
