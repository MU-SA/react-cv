import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import LabeledInput from '@/components/ui/labeledInput';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, GripVertical, PlusIcon, Trash2Icon } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import Employment from './Emploment';
import { useStore } from '@/state/store';

interface Employment {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  current: boolean;
}

const EmploymentsSection: React.FC = () => {
  const { employments, addEmployment } = useStore();
  const employmentsList = useMemo(
    () => employments.map((employment) => <Employment key={employment.id} {...employment} />),
    [employments]
  );

  return (
    <div className="w-full p-8 min-w-[500px]">
      <div className="flex items-start gap-2">
        <GripVertical className="w-4 h-4 mt-2" />
        <div className="w-full">
          <h4 className="text-2xl font-medium">Employments</h4>
          <div className="text-neutral-400">
            List your employment history in chronological order, starting with your most recent
            position. Include company names, job titles, dates, and key responsibilities for each
            role.
          </div>
          {employmentsList}
          <Button variant="ghost" className="mt-4" onClick={addEmployment}>
            <PlusIcon />
            Add more positions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmploymentsSection;
