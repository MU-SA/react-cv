import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import LabeledInput from '@/components/ui/labeledInput';
import { useStore, Language as LanguageType } from '@/state/store';
import { ChevronDown, Trash2Icon } from 'lucide-react';
import React from 'react';

const Language: React.FC<LanguageType> = ({ id, name, proficiency }) => {
  const { updateLanguage, removeLanguage } = useStore();

  return (
    <Collapsible className="w-full mt-6" defaultOpen={!name}>
      <div className="w-full">
        <div className="flex flex-1 justify-between items-center">
          <div>
            <div className="font-medium">{name || 'Untitled'}</div>
            <div className="text-sm text-neutral-400">{proficiency || 'No proficiency set'}</div>
          </div>
          <div className="flex items-center gap-4">
            <CollapsibleTrigger asChild>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <Button variant="ghost" size="icon" onClick={() => removeLanguage(id)}>
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CollapsibleContent className="w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 mt-4">
              <LabeledInput
                label="Language"
                value={name}
                onChange={(e) => updateLanguage(id, 'name', e.target.value)}
              />
              <LabeledInput
                label="Proficiency"
                value={proficiency}
                onChange={(e) => updateLanguage(id, 'proficiency', e.target.value)}
              />
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default Language;
