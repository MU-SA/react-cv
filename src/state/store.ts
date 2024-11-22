import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { personalDetailsSlice, PersonalDetailsSlice } from '@/state/slices/personalDetailsSlice';
import { technicalSkillsSlice, TechnicalSkillsSlice } from '@/state/slices/technicalSkillsSlice';
import { employmentsSlice, EmploymentsSlice } from '@/state/slices/employmentsSlice';
import { certificatesSlice, CertificatesSlice } from '@/state/slices/certificatesSlice';
import { languagesSlice, LanguagesSlice } from '@/state/slices/languagesSlice';

export type CVState = PersonalDetailsSlice &
  TechnicalSkillsSlice &
  EmploymentsSlice &
  CertificatesSlice &
  LanguagesSlice;

export const useStore = create<CVState>()(
  persist(
    (...a) => ({
      ...personalDetailsSlice(...a),
      ...technicalSkillsSlice(...a),
      ...employmentsSlice(...a),
      ...certificatesSlice(...a),
      ...languagesSlice(...a),
    }),
    {
      name: 'cv-store',
    }
  )
);

// Export individual slices
export * from './slices/personalDetailsSlice';
export * from './slices/personalDetailsSlice';
export * from './slices/employmentsSlice';
export * from './slices/certificatesSlice';
export * from './slices/languagesSlice';
