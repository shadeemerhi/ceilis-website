import { Redis } from "@upstash/redis";
import { createClient } from "redis";

export let redis: any | null = null;

async function getRedisClient() {
  if (process.env.NODE_ENV === "production") {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  } else {
    redis = createClient();
    await redis.connect();
  }
}

try {
  getRedisClient();
} catch (error) {
  console.log(error);
}
