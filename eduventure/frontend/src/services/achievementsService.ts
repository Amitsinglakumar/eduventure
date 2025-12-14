import apiClient from './apiClient';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

// Get all achievements
export const fetchAchievements = async (): Promise<Achievement[]> => {
  const response = await apiClient.get('/achievements');
  return response.data;
};

// Unlock achievement
export const unlockAchievement = async (achievementName: string): Promise<Achievement> => {
  const response = await apiClient.post('/achievements/unlock', { achievementName });
  return response.data;
};
