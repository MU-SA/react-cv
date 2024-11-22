import React from 'react';
import {
  CertificatesSection,
  Employments,
  LanguagesSection,
  PersonalDetails,
  TechnicalSkills,
} from './sections';
import { Separator } from '@/components/ui/separator';
import CVPreview from './CV/CVView';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-1 min-h-screen">
      <div className="flex flex-1 justify-center">
        <div className="w-full flex flex-col items-center min-w-[350px] max-w-3xl">
          <PersonalDetails />
          <Separator />
          <TechnicalSkills />
          <Separator />
          <Employments />
          <Separator />
          <CertificatesSection />
          <Separator />
          <LanguagesSection />
        </div>
      </div>
      <div className="flex flex-1 bg-neutral-100 p-2 justify-center h-screen sticky top-0 overflow-scroll">
        <CVPreview />
      </div>
    </div>
  );
};
export default HomePage;
