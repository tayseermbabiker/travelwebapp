# Vercel Pro Deployment Guide

## 🚀 Overview

This guide walks you through deploying Wander to Vercel Pro with all necessary configurations, environment variables, and optimizations.

---

## ✅ Prerequisites

Before deploying, ensure you have:

- [ ] **GitHub repository** with Wander code pushed
- [ ] **Vercel account** (sign up at https://vercel.com)
- [ ] **OpenAI API key** (from https://platform.openai.com)
- [ ] **MongoDB Atlas URI** (from MongoDB Atlas dashboard)
- [ ] **PWA icons** created and placed in `public/icons/`

---

## 🎯 Why Vercel Pro?

### Free Tier Limitations:
- ❌ 10-second function timeout (too short for AI generation)
- ❌ 60-second build timeout
- ❌ Limited bandwidth

### Vercel Pro Benefits:
- ✅ **300-second function timeout** (needed for OpenAI API calls)
- ✅ **45-minute build timeout**
- ✅ **1TB bandwidth**
- ✅ **Password protection** (for staging)
- ✅ **Analytics** (Core Web Vitals)
- ✅ **Preview deployments** (PR previews)

**Cost**: $20/month per user

---

## 📋 Step-by-Step Deployment

### Step 1: Create Vercel Account & Upgrade to Pro

1. Go to https://vercel.com/signup
2. Sign up with GitHub (recommended)
3. Go to Settings → Billing
4. Upgrade to **Vercel Pro** ($20/month)
5. Confirm upgrade

### Step 2: Import GitHub Repository

1. Click "Add New" → "Project"
2. Select "Import Git Repository"
3. Authorize Vercel to access your GitHub account
4. Select the **Wander** repository
5. Click "Import"

### Step 3: Configure Project Settings

#### Framework Preset:
- **Framework**: Next.js (auto-detected)
- **Root Directory**: `./` (default)

#### Build Settings:
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)

**Leave these as default** - Next.js configuration is handled automatically.

### Step 4: Configure Environment Variables

Click "Environment Variables" and add the following:

#### Required Variables:

| Key | Value | Where to Get It |
|-----|-------|-----------------|
| `OPENAI_API_KEY` | `sk-...` | https://platform.openai.com/api-keys |
| `MONGODB_URI` | `mongodb+srv://...` | MongoDB Atlas dashboard |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` | Your Vercel deployment URL |

#### Variable Details:

**1. OPENAI_API_KEY**
```
sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
- Get from: https://platform.openai.com/api-keys
- Click "Create new secret key"
- Copy and save (shown only once!)
- Paste into Vercel

**2. MONGODB_URI**
```
mongodb+srv://wander_app:YOUR_PASSWORD@cluster.xxxxx.mongodb.net/wander?retryWrites=true&w=majority
```
- Get from: MongoDB Atlas → Database → Connect
- Choose "Connect your application"
- Copy connection string
- Replace `<password>` with your database password
- Add `/wander` database name before the `?`

**3. NEXT_PUBLIC_APP_URL**
```
https://wander.vercel.app
```
- This will be your deployment URL
- You can set this after first deploy
- Or use custom domain if you have one

#### Environment Scopes:
For each variable, select:
- ✅ **Production**
- ✅ **Preview**
- ✅ **Development** (optional - for local testing)

### Step 5: Deploy

1. Click "Deploy"
2. Wait 2-5 minutes for build to complete
3. Watch the build logs for any errors
4. Once complete, you'll see "Congratulations!"

### Step 6: Get Your Deployment URL

1. Click "Visit" to open your deployed app
2. Copy the URL (e.g., `https://wander.vercel.app`)
3. Go back to Vercel dashboard
4. Settings → Environment Variables
5. Update `NEXT_PUBLIC_APP_URL` with your actual URL
6. Redeploy (Deployments → ... → Redeploy)

---

## 🔧 Post-Deployment Configuration

### Update MongoDB Network Access

MongoDB Atlas blocks connections by default. You need to whitelist Vercel:

1. Go to MongoDB Atlas dashboard
2. Click "Network Access" (left sidebar)
3. Click "Add IP Address"
4. **Option 1 (Easiest)**: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - ⚠️ Less secure but works immediately
5. **Option 2 (More Secure)**: Add Vercel IP ranges
   - Get Vercel IPs: https://vercel.com/docs/concepts/functions/serverless-functions/edge-functions#firewall
   - Add each IP range individually
6. Click "Confirm"

### Set Function Timeout (Vercel Pro Only)

1. Go to Vercel dashboard → Project Settings
2. Click "Functions"
3. Set **Maximal Duration**: 300 seconds
4. Click "Save"

**Important**: This is critical for OpenAI API calls which can take 30-60 seconds.

---

## 🧪 Testing Your Deployment

### 1. Basic Functionality Test

1. Visit your deployment URL
2. Fill out travel preferences
3. Click "Generate My Itinerary"
4. Wait for AI generation (30-60 seconds)
5. Verify itinerary displays correctly
6. Test PDF export
7. Test affiliate links

### 2. PWA Installation Test

**Desktop (Chrome/Edge):**
1. Visit your site
2. Look for install icon in address bar
3. Click to install
4. Verify app opens in standalone mode

**Mobile (Any Device):**
1. Visit your site
2. Look for "Add to Home Screen" prompt
3. Install the app
4. Open from home screen
5. Verify standalone mode

### 3. Offline Test

1. Install the PWA
2. Open DevTools → Network tab
3. Set to "Offline"
4. Navigate through cached pages
5. Try to generate new itinerary (should show offline page)
6. Go back online
7. Verify everything works

### 4. Performance Test

1. Open DevTools → Lighthouse
2. Run audit for:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - ✅ PWA
3. Aim for 90+ scores across all categories

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

1. Go to Vercel dashboard → Analytics
2. View Core Web Vitals:
   - **LCP** (Largest Contentful Paint) - Target: <2.5s
   - **FID** (First Input Delay) - Target: <100ms
   - **CLS** (Cumulative Layout Shift) - Target: <0.1
3. Monitor real user performance

### Setup External Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables: `NEXT_PUBLIC_GA_ID`
4. Add GA script to `app/layout.tsx`

**Sentry (Error Tracking):**
1. Create Sentry project
2. Get DSN
3. Add to Vercel environment variables: `NEXT_PUBLIC_SENTRY_DSN`
4. Install `@sentry/nextjs`
5. Configure in `next.config.ts`

---

## 🌐 Custom Domain Setup (Optional)

### Add Custom Domain:

1. Go to Vercel dashboard → Settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `wanderapp.com`)
4. Vercel provides DNS records:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
5. Go to your domain registrar (Namecheap, GoDaddy, etc.)
6. Add the DNS records
7. Wait 24-48 hours for DNS propagation
8. Vercel will automatically provision SSL certificate

### Update Environment Variables:

After custom domain is active:
1. Update `NEXT_PUBLIC_APP_URL` to your custom domain
2. Redeploy

---

## 🚨 Troubleshooting

### Build Failed

**Error**: "Command failed: npm run build"
- Check build logs for specific error
- Common issues:
  - TypeScript errors
  - Missing environment variables
  - Dependency conflicts
- Fix locally first: `npm run build`
- Push fix to GitHub
- Vercel auto-redeploys on push

### Function Timeout

**Error**: "Function execution timed out"
- Verify you're on Vercel Pro
- Check function timeout is set to 300s
- Settings → Functions → Maximal Duration

### MongoDB Connection Failed

**Error**: "MongoNetworkError"
- Check MongoDB Network Access
- Ensure Vercel IPs are whitelisted
- Verify `MONGODB_URI` is correct
- Test connection string locally first

### PWA Not Installing

**Issue**: Install prompt not showing
- Verify HTTPS is enabled (Vercel enables by default)
- Check all icons exist in `public/icons/`
- Run Lighthouse PWA audit
- Check manifest.json is accessible: `https://yoursite.com/manifest.json`

### Images Not Loading

**Error**: "Invalid src prop"
- Check Unsplash images are accessible
- Verify `images.domains` in `next.config.ts`
- Ensure image URLs are valid

---

## 🔄 Continuous Deployment

### Automatic Deployments:

Vercel automatically deploys when you push to GitHub:

- **Push to `main`** → Production deployment
- **Push to other branches** → Preview deployment
- **Open Pull Request** → Preview deployment with comment

### Manual Deployments:

1. Go to Deployments tab
2. Click "..." on any deployment
3. Click "Redeploy"

### Rollback:

1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## 📈 Performance Optimization

### Enable Vercel Speed Insights:

1. Go to Settings → Speed Insights
2. Enable Speed Insights
3. Install package: `npm install @vercel/speed-insights`
4. Add to `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Enable Image Optimization:

Vercel optimizes images automatically. Ensure you're using Next.js `<Image>` component:
```typescript
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  width={800}
  height={600}
  alt="Dubai"
/>
```

---

## 💰 Cost Estimation

### Vercel Pro Costs:

**Base**: $20/month per user

**Additional Costs** (if exceeded):
- Bandwidth: Free up to 1TB, then $40/100GB
- Functions: Free up to 1000 GB-hours, then $2/GB-hour
- Image Optimizations: Free up to 5000, then $5/1000 images

**Expected for Wander** (100 users/day):
- Bandwidth: <100GB/month (well under limit)
- Functions: <100 GB-hours/month (well under limit)
- Total: **$20/month**

### OpenAI Costs:

Using **gpt-4o-mini** (cheap model):
- Input: $0.150 / 1M tokens
- Output: $0.600 / 1M tokens

**Per Itinerary** (~20K tokens total):
- Cost: ~$0.015 per generation

**100 itineraries/day**:
- Daily: $1.50
- Monthly: **~$45**

**Total Monthly Cost**: ~$65 (Vercel + OpenAI)

---

## ✅ Deployment Checklist

### Pre-Deployment:
- [ ] Code pushed to GitHub
- [ ] OpenAI API key obtained
- [ ] MongoDB Atlas configured
- [ ] PWA icons created
- [ ] Build passes locally (`npm run build`)
- [ ] Environment variables documented

### Deployment:
- [ ] Vercel Pro account created
- [ ] Project imported from GitHub
- [ ] Environment variables configured
- [ ] Function timeout set to 300s
- [ ] First deployment successful
- [ ] `NEXT_PUBLIC_APP_URL` updated

### Post-Deployment:
- [ ] MongoDB network access configured
- [ ] PWA installation tested (mobile + desktop)
- [ ] Itinerary generation tested
- [ ] PDF export tested
- [ ] Affiliate links tested
- [ ] Offline mode tested
- [ ] Lighthouse audit passed (90+ scores)
- [ ] Custom domain configured (optional)

---

## 🎉 You're Live!

Your Wander app is now deployed and accessible worldwide:

- ✅ **Production URL**: https://your-domain.vercel.app
- ✅ **300s function timeout** for AI generation
- ✅ **Auto-deployments** on GitHub push
- ✅ **PWA installable** on all platforms
- ✅ **MongoDB persistence** for all itineraries
- ✅ **SSL/HTTPS** by default
- ✅ **Global CDN** for fast loading

**Next Steps**:
1. Share your app with users
2. Monitor analytics and performance
3. Gather feedback
4. Iterate and improve

---

## 📚 Additional Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **OpenAI API**: https://platform.openai.com/docs
- **MongoDB Atlas**: https://www.mongodb.com/docs/atlas
- **PWA Best Practices**: https://web.dev/progressive-web-apps/

---

## 🆘 Support

If you encounter issues:
1. Check Vercel build logs
2. Review this guide's troubleshooting section
3. Check Vercel support: https://vercel.com/support
4. MongoDB support: https://www.mongodb.com/support
5. OpenAI status: https://status.openai.com

---

**Wander is now live! 🚀 Happy travels!**
