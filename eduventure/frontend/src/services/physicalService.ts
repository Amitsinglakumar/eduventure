import apiClient from './apiClient';

export interface PhysicalActivity {
  id: string;
  name: string;
  duration: string;
  type: string;
}

// Fetch physical activities
export const fetchPhysicalActivities = async (): Promise<PhysicalActivity[]> => {
  const response = await apiClient.get('/physical-activities');
  return response.data;
};

// Start or log an exercise session
export const startExerciseSession = async (activityId: string): Promise<void> => {
  await apiClient.post('/physical-activities/start', { activityId });
};

