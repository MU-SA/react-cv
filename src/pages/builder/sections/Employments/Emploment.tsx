import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import DatePicker from '@/components/ui/datePicker';
import { Label } from '@/components/ui/label';
import LabeledInput from '@/components/ui/labeledInput';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Employment as EmploymentType, useStore } from '@/state/store';
import { ChevronDown, Trash2Icon } from 'lucide-react';
import moment from 'moment';
import React from 'react';

export const Employment: React.FC<EmploymentType> = ({
  id,
  company,
  startDate,
  endDate,
  description,
  currentlyWorking,
  title,
}) => {
  const { updateEmployment, removeEmployment } = useStore();

  return (
    <div key={id}>
      <Collapsible className="w-full mt-6" defaultOpen={!company}>
        <div className="w-full">
          <div className="flex flex-1 justify-between items-center">
            <div>
              <div className="font-medium">{title || 'Untitled'}</div>
              <div className="text-sm text-neutral-400">{company || 'Untitled'}</div>
            </div>
            <div className="flex items-center gap-4">
              <CollapsibleTrigger asChild>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <Button variant="ghost" size="icon" onClick={() => removeEmployment(id)}>
                <Trash2Icon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <CollapsibleContent className="w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2 mt-4">
                <LabeledInput
                  label="Job Title"
                  value={title}
                  onChange={(e) => updateEmployment(id, 'title', e.target.value)}
                />
                <LabeledInput
                  label="Company"
                  value={company}
                  onChange={(e) => updateEmployment(id, 'company', e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <DatePicker
                  date={startDate ? new Date(startDate) : undefined}
                  onSelect={(date) =>
                    updateEmployment(id, 'startDate', date ? moment(date).format('YYYY-MM-DD') : '')
                  }
                />
                {!currentlyWorking && (
                  <DatePicker
                    date={endDate ? new Date(endDate) : undefined}
                    onSelect={(date) =>
                      updateEmployment(id, 'endDate', date ? moment(date).format('YYYY-MM-DD') : '')
                    }
                  />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Label>Current working here</Label>
                <Switch
                  checked={currentlyWorking}
                  onCheckedChange={(e) => updateEmployment(id, 'currentlyWorking', e)}
                />
              </div>

              <Label className="mt-4">Description</Label>
              <Textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => updateEmployment(id, 'description', e.target.value)}
              />
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

export default Employment;
