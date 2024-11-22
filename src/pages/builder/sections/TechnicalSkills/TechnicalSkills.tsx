import { Button } from '@/components/ui/button';
import { GripVertical, PlusIcon } from 'lucide-react';
import Skill from './Skill';
import { useStore } from '@/state/store';
import { useMemo } from 'react';

export const TechnicalSkills = () => {
  const { technicalSkills, addTechnicalSkill } = useStore();

  const skills = useMemo(
    () => technicalSkills.map((item) => <Skill key={item.id} {...item} />),
    [technicalSkills]
  );

  return (
    <div className="w-full p-8">
      <div className="flex items-start gap-2 w-full">
        <GripVertical className="w-4 h-4 mt-2" />
        <div className="w-full">
          <h4 className="text-2xl font-medium">Technical Skills</h4>
          <div className="text-neutral-400">
            List your technical skills like programming languages, frameworks, tools and
            technologies. Add a minimum of 5 skills to showcase your technical expertise.
          </div>
          {skills}
          <Button variant="ghost" className="mt-4" onClick={addTechnicalSkill}>
            <PlusIcon />
            Add more skills
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
