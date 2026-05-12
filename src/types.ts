export interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  icon: string;
  chartData: { time: string; value: number }[];
}

export interface DeviceNode {
  id: string;
  name: string;
  type: string;
  status: 'online' | 'offline';
  battery: number;
  signal: number;
  lastUpdated: string;
}

export interface AlertNotification {
  id: string;
  title: string;
  description: string;
  type: 'warning' | 'alert' | 'info';
  timestamp: string;
}

export type ViewType = 'login' | 'dashboard' | 'analytics' | 'profile';

export interface PlantSuggestion {
  id: string;
  plantName: string;
  recommendation: string;
  conditions: string;
  duration: string;
  suitability: number; // 0-100
}
