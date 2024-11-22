import { useStore } from '@/state/store';
import moment from 'moment';

const CVPreview = () => {
  const { personalDetails, technicalSkills, employments, certificates, languages } = useStore();

  return (
    <div className="flex flex-col flex-1 bg-white aspect-[1/1.414] p-12 overflow-y-auto">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            {personalDetails.firstName} {personalDetails.lastName}
          </h1>
          <div className="text-neutral-600 mt-1">
            {personalDetails.email} • {personalDetails.phone}
          </div>
          <div className="text-neutral-600">
            {personalDetails.city}, {personalDetails.country}
          </div>
          {personalDetails.summary && <p className="mt-4 text-sm">{personalDetails.summary}</p>}
        </div>

        {technicalSkills.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              {technicalSkills.map((skill) => (
                <div key={skill.id} className="text-sm">
                  <span className="font-medium">{skill.title}</span>
                  {skill.skillLevel && (
                    <span className="text-neutral-600"> • {skill.skillLevel}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {employments.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <div className="space-y-4">
              {employments.map((job) => (
                <div key={job.id}>
                  <div className="font-medium">{job.title}</div>
                  <div className="text-neutral-600">{job.company}</div>
                  <div className="text-sm text-neutral-500">
                    {moment(job.startDate).format('MMM DD, YYYY')} -{' '}
                    {job.currentlyWorking ? 'Present' : moment(job.endDate).format('MMM DD, YYYY')}
                  </div>
                  {job.description && <p className="mt-2 text-sm">{job.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {certificates.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Certifications</h2>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div key={cert.id}>
                  <div className="font-medium">{cert.name}</div>
                  <div className="text-neutral-600">{cert.issuer}</div>
                  <div className="text-sm text-neutral-500">
                    {moment(cert.issueDate).format('MMM DD, YYYY')} -{' '}
                    {cert.noExpiryDate
                      ? 'No Expiry'
                      : moment(cert.expiryDate).format('MMM DD, YYYY')}
                  </div>
                  {cert.description && <p className="mt-2 text-sm">{cert.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {languages.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Languages</h2>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  {lang.proficiency && (
                    <span className="text-neutral-600"> • {lang.proficiency}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVPreview;
