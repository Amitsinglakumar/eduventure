import apiClient from './apiClient';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  levels: string[];
  xp_per_level: number;
  progress: number;
}

// Fetch all subjects and progress
export const fetchSubjects = async (): Promise<Subject[]> => {
  const response = await apiClient.get('/subjects');
  return response.data;
};

// Update subject progress
export const updateSubjectProgress = async (subjectId: string, progress: number): Promise<Subject> => {
  const response = await apiClient.patch(`/subjects/${subjectId}/progress`, { progress });
  return response.data;
};
