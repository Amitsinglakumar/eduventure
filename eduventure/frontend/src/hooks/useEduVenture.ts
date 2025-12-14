import { useContext } from 'react';
import { EduVentureContext } from '../context/EduVentureContext';

export function useEduVenture() {
  const context = useContext(EduVentureContext);
  if (!context) {
    throw new Error('useEduVenture must be used within an EduVentureProvider');
  }
  return context;
}
