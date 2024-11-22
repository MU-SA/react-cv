import { StateCreator } from 'zustand';

export interface Employment {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  currentlyWorking: boolean;
}

export interface EmploymentsSlice {
  employments: Employment[];
  addEmployment: () => void;
  removeEmployment: (id: string) => void;
  updateEmployment: (
    id: string,
    field: keyof Omit<Employment, 'id'>,
    value: string | boolean
  ) => void;
}

export const employmentsSlice: StateCreator<EmploymentsSlice, [], [], EmploymentsSlice> = (
  set: any
) => ({
  employments: [],

  addEmployment: () =>
    set((state: EmploymentsSlice) => ({
      employments: [
        ...state.employments,
        {
          id: crypto.randomUUID(),
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          description: '',
          currentlyWorking: false,
        },
      ],
    })),

  removeEmployment: (id) =>
    set((state: EmploymentsSlice) => ({
      employments: state.employments.filter((employment) => employment.id !== id),
    })),

  updateEmployment: (id, field, value) =>
    set((state: EmploymentsSlice) => ({
      employments: state.employments.map((employment) =>
        employment.id === id ? { ...employment, [field]: value } : employment
      ),
    })),
});
