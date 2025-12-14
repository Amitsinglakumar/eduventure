import apiClient from './apiClient';

export interface ProgressOverview {
  totalXP: number;
  currentLevel: number;
  streak: number;
  completionRate: number;
}

// Fetch statistical progress overview
export const fetchProgressOverview = async (): Promise<ProgressOverview> => {
  const response = await apiClient.get('/progress/overview');
  return response.data;
};
