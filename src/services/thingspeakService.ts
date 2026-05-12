/// <reference types="vite/client" />
import { SensorData } from '../types';

const CHANNEL_ID = import.meta.env.VITE_THINGSPEAK_CHANNEL_ID;
const READ_API_KEY = import.meta.env.VITE_THINGSPEAK_READ_API_KEY;

export async function fetchThingSpeakData(): Promise<Partial<SensorData>[]> {
  if (!CHANNEL_ID) {
    console.warn('ThingSpeak Channel ID not set. Using mock data.');
    return [];
  }

  try {
    const response = await fetch(
      `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${READ_API_KEY}&results=10`
    );
    const data = await response.json();
    
    if (!data.feeds || data.feeds.length === 0) return [];

    const lastFeed = data.feeds[data.feeds.length - 1];
    
    // Map fields to sensors (This depends on how user set up their channel)
    // Field 1: Moisture, Field 2: Temp, Field 3: Humidity, etc.
    return [
      { id: '1', value: parseFloat(lastFeed.field1) || 0 },
      { id: '2', value: parseFloat(lastFeed.field2) || 0 },
      { id: '3', value: parseFloat(lastFeed.field3) || 0 },
      { id: '4', value: parseFloat(lastFeed.field4) || 0 },
      { id: '5', value: parseFloat(lastFeed.field5) || 0 },
      { id: '6', value: parseFloat(lastFeed.field6) || 0 },
    ];
  } catch (error) {
    console.error('Error fetching ThingSpeak data:', error);
    return [];
  }
}
