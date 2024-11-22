import { Button } from '@/components/ui/button';
import { GripVertical, PlusIcon } from 'lucide-react';
import React, { useMemo } from 'react';
import Certificate from './Certificate';
import { useStore } from '@/state/store';

const CertificatesSection: React.FC = () => {
  const { certificates, addCertificate } = useStore();
  const certificatesList = useMemo(
    () => certificates.map((certificate) => <Certificate key={certificate.id} {...certificate} />),
    [certificates]
  );

  return (
    <div className="w-full p-8 min-w-[500px]">
      <div className="flex items-start gap-2">
        <GripVertical className="w-4 h-4 mt-2" />
        <div className="w-full">
          <h4 className="text-2xl font-medium">Certificates</h4>
          <div className="text-neutral-400">
            List your certifications in chronological order. Include certification names, issuing
            organizations, dates, and any relevant details.
          </div>
          {certificatesList}
          <Button variant="ghost" className="mt-4" onClick={addCertificate}>
            <PlusIcon />
            Add more certificates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
