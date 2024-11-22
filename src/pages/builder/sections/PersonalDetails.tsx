import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import LabeledInput from '@/components/ui/labeledInput';
import { Textarea } from '@/components/ui/textarea';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '@/state/store';
export const PersonalDetails = () => {
  const { personalDetails, updatePersonalDetails } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full p-8">
      <div className="text-2xl font-medium">Personal Details</div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <LabeledInput
          label="First Name"
          id="first-name"
          value={personalDetails.firstName}
          onChange={(e) => updatePersonalDetails('firstName', e.target.value)}
        />
        <LabeledInput
          label="Last Name"
          id="last-name"
          value={personalDetails.lastName}
          onChange={(e) => updatePersonalDetails('lastName', e.target.value)}
        />
        <LabeledInput
          label="Email"
          id="email"
          value={personalDetails.email}
          onChange={(e) => updatePersonalDetails('email', e.target.value)}
        />
        <LabeledInput
          label="Phone"
          id="phone"
          value={personalDetails.phone}
          onChange={(e) => updatePersonalDetails('phone', e.target.value)}
        />
        <LabeledInput
          label="Country"
          id="country"
          value={personalDetails.country}
          onChange={(e) => updatePersonalDetails('country', e.target.value)}
        />
        <LabeledInput
          label="City"
          id="city"
          value={personalDetails.city}
          onChange={(e) => updatePersonalDetails('city', e.target.value)}
        />
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full mt-6">
        <div className="flex gap-4 items-center">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <h4 className="text-sm font-medium text-blue-500">Edit Additional Details</h4>
              <ChevronsUpDown className="h-4 w-4 stroke-blue-500" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="grid grid-cols-2 gap-4 my-3">
            <LabeledInput
              label="Address"
              id="address"
              value={personalDetails.address}
              onChange={(e) => updatePersonalDetails('address', e.target.value)}
            />
            <LabeledInput
              label="Postal code"
              id="postal-code"
              value={personalDetails.postalCode}
              onChange={(e) => updatePersonalDetails('postalCode', e.target.value)}
            />
            <LabeledInput
              label="Driving License"
              id="driving-license"
              value={personalDetails.drivingLicense}
              onChange={(e) => updatePersonalDetails('drivingLicense', e.target.value)}
            />
            <LabeledInput
              label="Nationality"
              id="nationality"
              value={personalDetails.nationality}
              onChange={(e) => updatePersonalDetails('nationality', e.target.value)}
            />
            <LabeledInput
              label="Place of Birth"
              id="place-of-birth"
              value={personalDetails.placeOfBirth}
              onChange={(e) => updatePersonalDetails('placeOfBirth', e.target.value)}
            />
            <LabeledInput
              label="Date of Birth"
              id="date-of-birth"
              value={personalDetails.dateOfBirth}
              onChange={(e) => updatePersonalDetails('dateOfBirth', e.target.value)}
            />
          </div>
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id={'summary'}
            value={personalDetails.summary}
            onChange={(e) => updatePersonalDetails('summary', e.target.value)}
            className="mt-4"
          />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PersonalDetails;
