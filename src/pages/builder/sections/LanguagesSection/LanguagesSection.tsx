import { Button } from '@/components/ui/button';
import { useStore } from '@/state/store';
import { GripVertical, PlusIcon } from 'lucide-react';
import React, { useMemo } from 'react';
import Language from './Language';

const LanguagesSection: React.FC = () => {
  const { languages, addLanguage } = useStore();
  const languagesList = useMemo(
    () => languages.map((language) => <Language key={language.id} {...language} />),
    [languages]
  );

  return (
    <div className="w-full p-8 min-w-[500px]">
      <div className="flex items-start gap-2">
        <GripVertical className="w-4 h-4 mt-2" />
        <div className="w-full">
          <h4 className="text-2xl font-medium">Languages</h4>
          <div className="text-neutral-400">
            List the languages you know and your proficiency level in each. Include any relevant
            certifications or experience.
          </div>
          {languagesList}
          <Button variant="ghost" className="mt-4" onClick={addLanguage}>
            <PlusIcon />
            Add more languages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguagesSection;
