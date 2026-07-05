import { IconType } from 'react-icons';
import {
  DiReact,
  DiHtml5,
  DiScrum,
  DiGithubAlt,
  DiAndroid,
} from 'react-icons/di';
import { SiJest, SiGooglemaps } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import { FaUniversalAccess } from 'react-icons/fa';
import { TbBrandAzure, TbBrandSolidjs, TbSparklesFilled } from 'react-icons/tb';

const IconMap: Record<string, IconType> = {
  React: DiReact,
  'AI Tooling': TbSparklesFilled,
  SolidJS: TbBrandSolidjs,
  'Web Development': DiHtml5,
  'Web Accessibility': FaUniversalAccess,
  Agile: DiScrum,
  'Automated Testing': SiJest,
  Devops: DiGithubAlt,
  'Third Party APIs': SiGooglemaps,
  'Cloud Native': TbBrandAzure,
  'API Development': GrGraphQl,
  'Mobile Development': DiAndroid,
};

type SkillTitleProps = {
  name: string;
};

const SkillTitle: React.FC<SkillTitleProps> = ({ name }) => {
  const icon = IconMap[name] ?? DiReact;

  return (
    <div className="leading-8">
      {icon({ size: '2em', className: 'mr-4 inline' })}
      {name}
    </div>
  );
};

export default SkillTitle;
