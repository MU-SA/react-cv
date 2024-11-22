import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import LabeledInput from '@/components/ui/labeledInput';
import { useStore } from '@/state/store';
import { ChevronDown, Trash2Icon } from 'lucide-react';
import React from 'react';

interface SkillProps {
  id: string;
  title: string;
  skillLevel: string;
}

export const Skill: React.FC<SkillProps> = ({ id, title, skillLevel }) => {
  const { updateTechnicalSkill, removeTechnicalSkill } = useStore();

  return (
    <Collapsible className="w-full mt-6" defaultOpen={!title}>
      <div className="flex-1 ">
        <div className="flex flex-1 justify-between items-center">
          <div>
            <div className="font-medium">{title || 'Untitled'}</div>
            <div className="text-sm text-neutral-400">{skillLevel || 'Untitled'}</div>
          </div>
          <div className="flex items-center gap-2">
            <CollapsibleTrigger>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <Button variant="ghost" onClick={() => removeTechnicalSkill(id)}>
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mt-4">
              <LabeledInput
                label="Title"
                value={title}
                onChange={(e) => updateTechnicalSkill(id, 'title', e.target.value)}
              />
              <LabeledInput
                label="Skill Level"
                value={skillLevel}
                onChange={(e) => updateTechnicalSkill(id, 'skillLevel', e.target.value)}
              />
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default Skill;
