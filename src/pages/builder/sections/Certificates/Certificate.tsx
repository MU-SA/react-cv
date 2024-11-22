import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DatePicker } from '@/components/ui/datePicker';
import { Label } from '@/components/ui/label';
import LabeledInput from '@/components/ui/labeledInput';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Certificate as CertificateType, useStore } from '@/state/store';
import { ChevronDown, Trash2Icon } from 'lucide-react';
import React from 'react';
import moment from 'moment';

const Certificate: React.FC<CertificateType> = ({
  id,
  name,
  issuer,
  issueDate,
  expiryDate,
  description,
  noExpiryDate,
}) => {
  const { removeCertificate, updateCertificate } = useStore();
  return (
    <Collapsible className="w-full mt-6" defaultOpen={!name}>
      <div className="w-full">
        <div className="flex flex-1 justify-between items-center">
          <div>
            <div className="font-medium">{name || 'Untitled'}</div>
            <div className="text-sm text-neutral-400">{issuer || 'Untitled'}</div>
          </div>
          <div className="flex items-center gap-4">
            <CollapsibleTrigger asChild>
              <ChevronDown className="w-4 h-4" />
            </CollapsibleTrigger>
            <Button variant="ghost" size="icon" onClick={() => removeCertificate(id)}>
              <Trash2Icon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <CollapsibleContent className="w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2 mt-4">
              <LabeledInput
                label="Certificate Name"
                value={name}
                onChange={(e) => updateCertificate(id, 'name', e.target.value)}
              />
              <LabeledInput
                label="Issuing Organization"
                value={issuer}
                onChange={(e) => updateCertificate(id, 'issuer', e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <DatePicker
                date={issueDate ? new Date(issueDate) : undefined}
                onSelect={(date) =>
                  updateCertificate(id, 'issueDate', date ? moment(date).format('YYYY-MM-DD') : '')
                }
              />
              {!noExpiryDate && (
                <DatePicker
                  date={expiryDate ? new Date(expiryDate) : undefined}
                  onSelect={(date) =>
                    updateCertificate(
                      id,
                      'expiryDate',
                      date ? moment(date).format('YYYY-MM-DD') : ''
                    )
                  }
                />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Label>No expiration date</Label>
              <Switch
                checked={noExpiryDate}
                onCheckedChange={(checked) => updateCertificate(id, 'noExpiryDate', checked)}
              />
            </div>

            <Label className="mt-4">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => updateCertificate(id, 'description', e.target.value)}
            />
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default Certificate;
