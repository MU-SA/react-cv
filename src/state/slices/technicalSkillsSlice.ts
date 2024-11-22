import { StateCreator } from 'zustand';

interface TechnicalSkill {
  id: string;
  title: string;
  skillLevel: string;
}

export interface TechnicalSkillsSlice {
  technicalSkills: TechnicalSkill[];
  addTechnicalSkill: () => void;
  removeTechnicalSkill: (id: string) => void;
  updateTechnicalSkill: (
    id: string,
    field: keyof Omit<TechnicalSkill, 'id'>,
    value: string
  ) => void;
}

export const technicalSkillsSlice: StateCreator<
  TechnicalSkillsSlice,
  [],
  [],
  TechnicalSkillsSlice
> = (set) => ({
  technicalSkills: [],

  addTechnicalSkill: () =>
    set((state: TechnicalSkillsSlice) => ({
      technicalSkills: [
        ...state.technicalSkills,
        {
          id: crypto.randomUUID(),
          title: '',
          skillLevel: '',
        },
      ],
    })),

  removeTechnicalSkill: (id) =>
    set((state: TechnicalSkillsSlice) => ({
      technicalSkills: state.technicalSkills.filter((skill) => skill.id !== id),
    })),

  updateTechnicalSkill: (id, field, value) =>
    set((state: TechnicalSkillsSlice) => ({
      technicalSkills: state.technicalSkills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    })),
});
