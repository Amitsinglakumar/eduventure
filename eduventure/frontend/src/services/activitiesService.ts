import apiClient from './apiClient';

export interface Activity {
  id: string;
  type: string;
  title: string;
  icon: string;
  xp: number;
  completed: boolean;
}

// Get daily or ongoing activities
export const fetchActivities = async (): Promise<Activity[]> => {
  const response = await apiClient.get('/activities');
  return response.data;
};

// Mark activity as completed (by type or ID)
export const completeActivity = async (activityType: string): Promise<void> => {
  await apiClient.post('/activities/complete', { activityType });
};
