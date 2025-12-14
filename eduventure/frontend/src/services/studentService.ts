import apiClient from './apiClient';

export interface StudentProfile {
  name: string;
  level: number;
  totalXP: number;
  streak: number;
  badges: string[];
}

// Get student profile
export const fetchStudentProfile = async (): Promise<StudentProfile> => {
  const response = await apiClient.get('/student/profile');
  return response.data;
};

// Update XP and level
export const updateStudentXP = async (xpGain: number): Promise<StudentProfile> => {
  const response = await apiClient.post('/student/xp', { xpGain });
  return response.data;
};

// Update streak record
export const updateStudentStreak = async (): Promise<StudentProfile> => {
  const response = await apiClient.post('/student/streak');
  return response.data;
};
