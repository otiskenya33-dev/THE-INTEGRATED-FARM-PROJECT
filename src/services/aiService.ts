import { GoogleGenAI, Type } from "@google/genai";
import { PlantSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getPlantSuggestions(currentConditions: string): Promise<PlantSuggestion[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the following greenhouse conditions: ${currentConditions}, provide AI suggestions for growing tomatoes, kale, and oranges. 
      For each plant, include:
      - recommendation (a brief text why it's a good/bad choice)
      - conditions (optimal atmospheric conditions needed)
      - duration (estimated growth duration)
      - suitability (a percentage score 0-100)
      
      Return the data in a structured format suitable for the dashboard.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              plantName: { type: Type.STRING },
              recommendation: { type: Type.STRING },
              conditions: { type: Type.STRING },
              duration: { type: Type.STRING },
              suitability: { type: Type.NUMBER },
            },
            required: ["id", "plantName", "recommendation", "conditions", "duration", "suitability"],
          },
        },
      },
    });

    const suggestions = JSON.parse(response.text);
    return suggestions;
  } catch (error) {
    console.error("Error fetching AI suggestions:", error);
    // Fallback data
    return [
      {
        id: '1',
        plantName: 'Tomatoes',
        recommendation: 'Optimal temperature and humidity levels make tomatoes an excellent choice for this season.',
        conditions: '21-27°C, 60-70% Humidity, 8+ hours light',
        duration: '60-80 days',
        suitability: 95
      },
      {
        id: '2',
        plantName: 'Kale',
        recommendation: 'Kale is resilient and performs well in the controlled environment of Sector One.',
        conditions: '15-22°C, Flexible humidity, Moderate light',
        duration: '45-65 days',
        suitability: 88
      },
      {
        id: '3',
        plantName: 'Oranges',
        recommendation: 'Requires consistent warmth. Potential for growth if nighttime temperatures are maintained.',
        conditions: '18-32°C, High humidity, Full sun',
        duration: '12-15 months',
        suitability: 72
      }
    ];
  }
}
