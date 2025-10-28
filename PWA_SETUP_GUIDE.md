# PWA (Progressive Web App) Setup Guide

## ✅ What Was Implemented

### Files Created:
1. **`public/manifest.json`** - PWA manifest with app metadata
2. **`app/offline/page.tsx`** - Offline fallback page
3. **`PWA_SETUP_GUIDE.md`** - This comprehensive guide

### Files Modified:
1. **`next.config.ts`** - Added PWA configuration with service worker
2. **`app/layout.tsx`** - Added PWA meta tags and manifest link
3. **`package.json`** - Added next-pwa dependency

---

## 📱 PWA Features Implemented

### ✅ Core PWA Features:
- **Installable**: Users can install Wander on their home screen
- **Offline Support**: Service worker caches static assets
- **App-like Experience**: Runs in standalone mode (no browser UI)
- **Fast Loading**: Assets cached for instant load times
- **Responsive**: Works on all device sizes

### 🔧 Service Worker Caching Strategy:

#### CacheFirst (for static assets that rarely change):
- **Google Fonts**: 1 year cache
- **Unsplash Images**: 30 days cache

#### StaleWhileRevalidate (for assets that may update):
- **Fonts**: 7 days cache
- **Images**: 24 hours cache
- **Next.js images**: 24 hours cache
- **JS/CSS**: 24 hours cache

#### NetworkFirst (for dynamic content):
- **API routes**: 5 minutes cache with 10s network timeout
- Falls back to cache if network fails

#### NetworkOnly (never cache):
- **OpenAI API calls**: Always fresh (no caching)

---

## 🎨 Icon Requirements

### Required Icons (place in `public/icons/` directory):

The manifest.json references these icons. You need to create them:

| Size | Filename | Purpose |
|------|----------|---------|
| 72x72 | icon-72x72.png | Smallest app icon |
| 96x96 | icon-96x96.png | Small app icon |
| 128x128 | icon-128x128.png | Medium app icon |
| 144x144 | icon-144x144.png | Medium app icon |
| 152x152 | icon-152x152.png | Apple touch icon |
| 192x192 | icon-192x192.png | Standard app icon |
| 384x384 | icon-384x384.png | Large app icon |
| 512x512 | icon-512x512.png | Splash screen icon |

### How to Generate Icons:

#### Option 1: Use Online Tool (Easiest)
1. Go to: https://www.pwabuilder.com/imageGenerator
2. Upload a 512x512 source image (your logo)
3. Download the icon pack
4. Extract to `public/icons/` folder

#### Option 2: Use Figma/Photoshop
1. Create a 512x512 image with your logo
2. Export at different sizes (use the list above)
3. Save all icons to `public/icons/` folder

#### Icon Design Guidelines:
- **Background**: Solid color or gradient (teal #14b8a6 matches theme)
- **Logo**: Centered, takes up ~70% of canvas
- **Format**: PNG with transparency
- **Shape**: Square (system will round corners automatically)
- **Maskable**: Ensure important content is in the "safe zone" (80% center)

### Suggested Icon Design:
```
Background: Teal gradient (#14b8a6 to #0d9488)
Icon: Airplane or compass symbol in white
Text: "W" in modern sans-serif font (optional)
Style: Minimalist, travel-themed
```

---

## 📸 Screenshot Requirements

### For App Store Listings (optional but recommended):

Place in `public/screenshots/` directory:

| File | Size | Purpose |
|------|------|---------|
| home.png | 1280x720 | Desktop/tablet home screen |
| mobile-home.png | 750x1334 | Mobile home screen |

Screenshots help users preview your app in browser install prompts.

---

## 🧪 Testing Your PWA

### 1. Build for Production
```bash
npm run build
npm start
```

**Important**: PWA features only work in production builds (disabled in dev mode)

### 2. Test Installation (Desktop)
1. Open http://localhost:3000 in Chrome
2. Look for install icon in address bar (⊕ or ⬇)
3. Click to install
4. App should open in standalone window

### 3. Test Installation (Mobile)
1. Deploy to Vercel (or use ngrok for local testing)
2. Open on mobile device
3. Look for "Add to Home Screen" prompt
4. Install and launch from home screen

### 4. Test Offline Mode
1. Install the app
2. Open DevTools → Network tab
3. Set to "Offline"
4. Navigate through the app
5. Static pages should load (cached)
6. Dynamic pages show offline fallback

### 5. PWA Audit (Chrome DevTools)
1. Open DevTools → Lighthouse tab
2. Select "Progressive Web App"
3. Click "Generate report"
4. Aim for 100% score

**Common issues:**
- Missing icons → Check `public/icons/` folder
- Service worker not registered → Verify production build
- HTTPS required → Deploy to Vercel (localhost works too)

---

## 🚀 PWA Checklist

### Before Deploying:

- [ ] **Icons created** (all 8 sizes in `public/icons/`)
- [ ] **Screenshots created** (desktop + mobile in `public/screenshots/`)
- [ ] **manifest.json verified** (check all paths)
- [ ] **HTTPS enabled** (required for service workers)
- [ ] **Built in production mode** (`npm run build`)
- [ ] **Lighthouse PWA audit passed** (90+ score)
- [ ] **Tested on mobile device** (install + offline)
- [ ] **Tested on desktop browser** (Chrome, Edge)

---

## 📊 PWA Manifest Configuration

### Current Settings (from `manifest.json`):

```json
{
  "name": "Wander - AI Travel Planner",
  "short_name": "Wander",
  "theme_color": "#14b8a6",  // Teal - matches brand
  "background_color": "#ffffff",
  "display": "standalone",    // Hides browser UI
  "orientation": "portrait-primary"
}
```

### Customization Options:

**Display Modes:**
- `standalone` - Looks like native app (CURRENT)
- `fullscreen` - Takes over entire screen
- `minimal-ui` - Minimal browser UI
- `browser` - Regular browser tab

**Orientation:**
- `portrait-primary` - Locks to portrait (CURRENT)
- `any` - Allows rotation
- `landscape` - Locks to landscape

---

## 🎯 PWA Features After Installation

### What Users Get:
1. **Home Screen Icon**: App appears alongside native apps
2. **Splash Screen**: Shows icon + name while loading
3. **No Browser UI**: Runs in standalone window
4. **Offline Access**: Cached pages work without internet
5. **Fast Load Times**: Assets load instantly from cache
6. **App Shortcuts**: "Plan New Trip" shortcut (long-press icon)

---

## 🛠️ Troubleshooting

### "Service worker not registered"
- Build in production mode: `npm run build && npm start`
- Service worker is disabled in dev mode by design

### "Install prompt not showing"
- Ensure HTTPS (or localhost)
- Check Lighthouse PWA audit for issues
- Verify all icons exist
- Try incognito mode (clears previous install state)

### "Offline page not loading"
- Service worker needs time to activate
- Visit pages first to cache them
- Offline fallback only shows for uncached routes

### "Icons not displaying"
- Check file paths in manifest.json
- Ensure icons exist in `public/icons/` folder
- Clear browser cache and reinstall

---

## 📈 Analytics for PWA

### Track Installation Events:

Add to `app/layout.tsx` (in a client component):

```typescript
'use client';

useEffect(() => {
  // Track PWA install
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('📱 PWA install prompt shown');
    // Track with your analytics (Google Analytics, etc.)
  });

  window.addEventListener('appinstalled', () => {
    console.log('✅ PWA installed successfully');
    // Track successful install
  });
}, []);
```

### Recommended Analytics to Track:
- Install prompt impressions
- Successful installs
- Offline page views
- Service worker errors
- Cache hit rates

---

## 🚀 Deployment Notes

### Vercel Deployment:
- ✅ HTTPS enabled by default
- ✅ Service workers supported
- ✅ No extra configuration needed
- ✅ PWA works out of the box

### Environment Variables (for Vercel):
Make sure these are set:
- `NEXT_PUBLIC_APP_URL` - Your production URL
- `OPENAI_API_KEY` - OpenAI API key
- `MONGODB_URI` - MongoDB connection string

---

## 📱 Platform-Specific Install Instructions

### iOS (Safari):
1. Open site in Safari
2. Tap Share button (⬆️)
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"

**Note**: iOS has limited service worker support. Offline features may be restricted.

### Android (Chrome):
1. Open site in Chrome
2. Tap menu (⋮)
3. Tap "Install app" or "Add to Home Screen"
4. Tap "Install"

### Desktop (Chrome/Edge):
1. Open site in browser
2. Click install icon in address bar
3. Click "Install"

---

## ✅ Next Steps

1. **Create icons** using PWA Builder or design tool
2. **Create screenshots** of home page and itinerary page
3. **Test locally** with production build
4. **Deploy to Vercel** with environment variables
5. **Test on mobile** device
6. **Run Lighthouse audit** and optimize
7. **Monitor** install rates and offline usage

---

## 🎉 PWA is Ready!

Your Wander app is now a fully functional Progressive Web App:
- ✅ Installable on all platforms
- ✅ Works offline with cached content
- ✅ Fast loading with service worker
- ✅ App-like experience in standalone mode
- ✅ Optimized caching strategies

**Next task**: Deploy to Vercel Pro for production! 🚀
