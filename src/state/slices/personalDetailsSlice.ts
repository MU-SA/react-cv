import { StateCreator } from 'zustand';

interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: string;
  summary: string;
}

export interface PersonalDetailsSlice {
  personalDetails: PersonalDetails;
  updatePersonalDetails: (field: keyof PersonalDetails, value: string) => void;
}

export const personalDetailsSlice: StateCreator<
  PersonalDetailsSlice,
  [],
  [],
  PersonalDetailsSlice
> = (set) => ({
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    drivingLicense: '',
    nationality: '',
    placeOfBirth: '',
    dateOfBirth: '',
    summary: '',
  },

  updatePersonalDetails: (field, value) =>
    set((state: PersonalDetailsSlice) => ({
      personalDetails: {
        ...state.personalDetails,
        [field]: value,
      },
    })),
});
