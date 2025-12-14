import apiClient from './apiClient';

export interface MoralStory {
  id: string;
  title: string;
  source: string;
  lesson: string;
  content: string;
}

export interface Shloka {
  id: string;
  sanskrit: string;
  translation: string;
  source: string;
}

// Fetch moral stories
export const fetchMoralStories = async (): Promise<MoralStory[]> => {
  const response = await apiClient.get('/moral-stories');
  return response.data;
};

// Fetch shlokas
export const fetchShlokas = async (): Promise<Shloka[]> => {
  const response = await apiClient.get('/shlokas');
  return response.data;
};
