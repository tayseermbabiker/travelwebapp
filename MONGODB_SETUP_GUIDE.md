# MongoDB Atlas Setup Guide

## ✅ What Was Implemented

### Files Created:
1. **`lib/mongodb/connection.ts`** - MongoDB connection utility
2. **`lib/mongodb/models.ts`** - Database schemas and CRUD operations

### Files Modified:
1. **`app/api/generate-itinerary/route.ts`** - Saves itineraries to MongoDB
2. **`app/api/affiliate-redirect/route.ts`** - Logs clicks to MongoDB
3. **`.env.local`** - Added MONGODB_URI variable

---

## 📊 Database Collections

### 1. **Itineraries Collection**

Stores all generated trip itineraries with full details:

```typescript
{
  itineraryId: string,          // UUID from AI
  destination: string,
  country?: string,
  cities?: string[],
  dateRange: { start, end },
  budget: number,
  companionType: string,
  interests: string[],

  // AI outputs
  companionProfile: object,
  budgetAllocation: object,
  itinerary: object,

  // Analytics
  viewed: number,               // View count
  downloaded: boolean,          // PDF downloaded?
  affiliateClicks: number,      // Number of clicks

  // Metadata
  generatedAt: Date,
  userAgent: string,
  ipAddress: string,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. **Affiliate Clicks Collection**

Tracks all affiliate link clicks for commission analytics:

```typescript
{
  itineraryId?: string,         // Link to parent itinerary
  activityId?: string,          // Activity or hotel ID
  provider: string,             // getyourguide, viator, booking

  timestamp: Date,
  userAgent: string,
  referer: string,
  ipAddress: string,

  clicked: boolean,
  converted?: boolean,          // Did user complete booking?
  commissionEarned?: number,    // Commission amount

  createdAt: Date
}
```

---

## 🚀 How to Set Up MongoDB Atlas

### Step 1: Create Free MongoDB Atlas Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free (no credit card required)
3. Create a new project: "Wander"

### Step 2: Create a Cluster

1. Click "Build a Database"
2. Choose **M0 Sandbox** (FREE tier)
   - 512 MB storage
   - Shared RAM
   - Suitable for MVP
3. Select cloud provider: **AWS**
4. Region: Choose closest to your users (e.g., US East, Europe, Asia)
5. Cluster name: "Wander-Production"
6. Click "Create Cluster"

### Step 3: Create Database User

1. Go to **Database Access** (left sidebar)
2. Click "Add New Database User"
3. Authentication Method: **Password**
4. Username: `wander_app`
5. Password: Generate secure password (save it!)
6. Database User Privileges: **Read and write to any database**
7. Click "Add User"

### Step 4: Whitelist IP Addresses

1. Go to **Network Access** (left sidebar)
2. Click "Add IP Address"
3. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
   - ⚠️ For production: Add your Vercel deployment IPs
4. Click "Confirm"

### Step 5: Get Connection String

1. Go to **Database** (left sidebar)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Driver: **Node.js** version **5.5 or later**
5. Copy the connection string

It looks like:
```
mongodb+srv://wander_app:<password>@wander-production.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### Step 6: Update .env.local

1. Open `.env.local` in your project
2. Replace the placeholder MONGODB_URI:

```bash
MONGODB_URI=mongodb+srv://wander_app:YOUR_ACTUAL_PASSWORD@wander-production.xxxxx.mongodb.net/wander?retryWrites=true&w=majority
```

**Important:**
- Replace `YOUR_ACTUAL_PASSWORD` with the password you created
- Add `/wander` before the `?` to specify database name
- Keep the `?retryWrites=true&w=majority` parameters

### Step 7: Test Connection

Run your dev server:
```bash
npm run dev
```

Generate an itinerary. Check the console logs:
- ✅ "MongoDB connected successfully"
- ✅ "Itinerary saved to MongoDB"

---

## 📈 Available Database Operations

### From `lib/mongodb/models.ts`:

```typescript
// Save itinerary
await saveItinerary(itineraryData);

// Get itinerary by ID
const itinerary = await getItineraryById('uuid');

// Track views
await incrementItineraryViews('uuid');

// Mark as downloaded
await markItineraryAsDownloaded('uuid');

// Log affiliate click
await logAffiliateClick(clickData);

// Get analytics
const analytics = await getItineraryAnalytics('uuid');

// Admin: Get recent itineraries
const recent = await getRecentItineraries(10);

// Admin: Get affiliate stats
const stats = await getAffiliateStats(30); // last 30 days
```

---

## 🛡️ Graceful Degradation

The app **continues to work** even if MongoDB is not configured:

```typescript
try {
  await saveItinerary(data);
  console.log('💾 Saved to MongoDB');
} catch (error) {
  console.warn('⚠️ MongoDB failed (continuing without persistence)');
  // App continues, uses sessionStorage instead
}
```

---

## 💰 Pricing (MongoDB Atlas)

| Tier | Price | Storage | RAM | Best For |
|------|-------|---------|-----|----------|
| **M0 Sandbox** | FREE | 512 MB | Shared | MVP, Testing |
| **M2** | $9/mo | 2 GB | Shared | Early production |
| **M10** | $57/mo | 10 GB | 2 GB | Growing app |
| **M20** | $127/mo | 20 GB | 4 GB | Scale-up |

**Recommendation for Wander:**
- Start with **M0 (FREE)** for MVP
- Upgrade to **M2** when you hit 512 MB limit
- M0 supports ~10,000 itineraries (50 KB each)

---

## 📊 Monitoring & Analytics

### View Your Data

1. Go to MongoDB Atlas dashboard
2. Click "Collections" on your cluster
3. See databases: `wander`
4. Collections:
   - `itineraries` - All generated trips
   - `affiliate_clicks` - All affiliate clicks

### Useful Queries

#### Total itineraries:
```javascript
db.itineraries.countDocuments()
```

#### Itineraries by destination:
```javascript
db.itineraries.aggregate([
  { $group: { _id: "$destination", count: { $sum: 1 } } }
])
```

#### Affiliate click conversion rate:
```javascript
db.affiliate_clicks.aggregate([
  {
    $group: {
      _id: "$provider",
      totalClicks: { $sum: 1 },
      conversions: { $sum: { $cond: ["$converted", 1, 0] } }
    }
  }
])
```

---

## 🚨 Troubleshooting

### "MongoServerError: bad auth"
- Check username/password in connection string
- Verify database user exists in Atlas
- Password special characters need URL encoding

### "MongoNetworkError: connection timeout"
- Check Network Access IP whitelist
- Verify firewall isn't blocking port 27017
- Try "Allow Access from Anywhere" temporarily

### "Database takes long to connect"
- M0 free tier can be slow on first connect
- Connection is cached after first request
- Consider upgrading to M2+ for faster connections

---

## ✅ Next Steps

1. **Set up MongoDB Atlas** (following guide above)
2. **Test itinerary generation** (should see "💾 Saved to MongoDB")
3. **Test affiliate clicks** (should see "📊 Affiliate Click" logged)
4. **Monitor in Atlas dashboard** (view stored data)
5. **Build admin dashboard** (future: view analytics)

---

## 🔐 Security Best Practices

1. ✅ Use environment variables (never commit MONGODB_URI)
2. ✅ Create dedicated database user (not root)
3. ✅ Whitelist specific IPs in production
4. ✅ Use strong passwords (20+ characters)
5. ✅ Enable MongoDB encryption at rest (Atlas default)
6. ✅ Rotate credentials every 90 days

---

MongoDB is ready! The app will automatically save all itineraries and track affiliate clicks. 🎉
