export interface UserInfo {
  fullName: string;
  address: string;
  phone: string;
  bloodGroup: string;
  age: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type Mode = 'offender' | 'defender';

export interface LawAct {
  name: string;
  section: string;
  description: string;
  penalty?: string;
}

export interface NearbyService {
  name: string;
  type: 'police' | 'advocate';
  address: string;
  phone: string;
  distance: string;
  mapUrl: string;
  rating?: number;
  lat?: number;
  lng?: number;
}
