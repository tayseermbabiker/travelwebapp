import { MongoClient, Db } from 'mongodb';

// MongoDB is OPTIONAL - app works without it using sessionStorage
const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

// Only initialize MongoDB if URI is provided
if (uri) {
  // In development mode, use a global variable to preserve the MongoClient across hot reloads
  // In production, create a new MongoClient for each request
  if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      // @ts-ignore
      global._mongoClientPromise = client.connect();
    }
    // @ts-ignore
    clientPromise = global._mongoClientPromise;
  } else {
    // In production, create a new MongoClient for each request
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  console.warn('⚠️ MONGODB_URI not configured - app will use sessionStorage only');
}

/**
 * Get MongoDB client
 * Usage: const client = await getMongoClient();
 * Returns null if MongoDB is not configured
 */
export async function getMongoClient(): Promise<MongoClient | null> {
  if (!clientPromise) {
    return null;
  }
  return clientPromise;
}

/**
 * Get MongoDB database
 * Usage: const db = await getDatabase();
 * Returns null if MongoDB is not configured
 */
export async function getDatabase(): Promise<Db | null> {
  const client = await getMongoClient();
  if (!client) {
    return null;
  }
  return client.db('wander'); // Database name
}

/**
 * Test MongoDB connection
 * Returns false if MongoDB is not configured
 */
export async function testConnection(): Promise<boolean> {
  try {
    const client = await getMongoClient();
    if (!client) {
      console.warn('⚠️ MongoDB not configured');
      return false;
    }
    await client.db('admin').command({ ping: 1 });
    console.log('✅ MongoDB connected successfully');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    return false;
  }
}

export default clientPromise;
