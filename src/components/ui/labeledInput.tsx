import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

export type LabeledInputProps = React.ComponentProps<'input'> & { label?: string };

export const LabeledInput: React.FC<LabeledInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="w-full gap-2 flex flex-col">
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...props} />
    </div>
  );
};
export default LabeledInput;
