import React from 'react';
import { Card } from 'flowbite-react';
import { ResumeProfile } from 'data/index';

type FactsSummaryProps = Required<Pick<ResumeProfile, 'basics'>> & {
  yearsExperience: number;
};

const FactsSummary: React.FC<FactsSummaryProps> = ({
  basics: { label, location, preferredPronouns, preferredName },
  yearsExperience,
}) => (
  <Card horizontal>
    <h3 className="text-2xl font-bold">{label}</h3>

    <ul>
      <li>Preferred name: {preferredName}</li>
      <li>Preferred pronouns: {preferredPronouns}</li>
      <li>Years of experience: {yearsExperience}</li>
      {location && (
        <li>
          Location: {location.city}, {location.region}
        </li>
      )}
    </ul>
  </Card>
);

export default FactsSummary;
