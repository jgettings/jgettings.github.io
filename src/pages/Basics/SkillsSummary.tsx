import React from 'react';
import {
  DiAtlassian,
  DiCss3,
  DiGoogleCloudPlatform,
  DiJava,
  DiHtml5,
  DiMysql,
  DiMongodb,
  DiNpm,
  DiPostgresql,
  DiReact,
  DiScrum,
} from 'react-icons/di';
import {
  SiTypescript,
  SiMui,
  SiDocker,
  SiJavascript,
  SiStorybook,
  SiEslint,
  SiGithubactions,
  SiCypress,
  SiJest,
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandAzure, TbBrandSolidjs } from 'react-icons/tb';
import {
  RiFirebaseFill,
  RiTailwindCssFill,
  RiCursorAiFill,
  RiAngularjsFill,
} from 'react-icons/ri';
import { FaGithub, FaNodeJs } from 'react-icons/fa';
import { BsClaude } from 'react-icons/bs';

import { Card } from 'flowbite-react';
import data from 'data/index';
import { IconType } from 'react-icons';

const icons = [
  { icon: DiReact, title: 'React' },
  { icon: TbBrandSolidjs, title: 'SolidJS' },
  { icon: SiTypescript, title: 'TypeScript' },
  { icon: BsClaude, title: 'Claude' },
  { icon: RiCursorAiFill as IconType, title: 'Cursor' },
  { icon: SiJavascript, title: 'JavaScript' },
  { icon: SiCypress, title: 'Cypress' },
  { icon: SiJest, title: 'Jest' },
  { icon: FaNodeJs, title: 'NodeJS' },
  { icon: DiHtml5, title: 'HTML' },
  { icon: DiCss3, title: 'CSS' },
  { icon: DiNpm, title: 'NPM' },
  { icon: SiMui, title: 'Material UI' },
  { icon: RiTailwindCssFill, title: 'Tailwind' },
  { icon: RiAngularjsFill, title: 'AngularJS' },

  { icon: DiAtlassian, title: 'Atlassian' },
  { icon: DiScrum, title: 'Agile, Scrum' },
  { icon: FaGithub, title: 'Github' },
  { icon: SiGithubactions, title: 'Github Actions' },
  { icon: DiGoogleCloudPlatform, title: 'Google Cloud Platform' },
  { icon: RiFirebaseFill, title: 'Firebase' },
  { icon: TbBrandAzure, title: 'Azure' },
  { icon: SiStorybook, title: 'Storybook' },
  { icon: SiEslint, title: 'EsLint' },

  { icon: DiJava, title: 'Java' },
  { icon: DiMysql, title: 'MySQL' },
  { icon: DiMongodb, title: 'MongoDB' },
  { icon: DiPostgresql, title: 'PostgreSQL' },
  { icon: TbBrandCSharp, title: 'CSharp, .NET Framework, .NETCore' },
  { icon: SiDocker, title: 'Docker' },
];

const SkillsSummary: React.FC = () => {
  const { basics } = data;
  if (basics === undefined) {
    return null;
  }

  return (
    <Card>
      Specializing on frontend work in React, Typescript, and similar languages
      for the past 10 years, prior to that was all full stack in a few different
      enterprise languages.
      <div className="flex flex-wrap justify-center gap-5">
        {icons.map(({ icon, title }) => (
          <span key={title}>{icon({ size: '2em', title })}</span>
        ))}
      </div>
    </Card>
  );
};

// TODO add link to skills section once the section is added
// TODO pull from json?

export default SkillsSummary;
