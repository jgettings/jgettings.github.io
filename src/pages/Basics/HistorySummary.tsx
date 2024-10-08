import React from 'react';
import { Card } from 'flowbite-react';
import { FaLinkedin } from 'react-icons/fa';

type HistorySummaryProps = {
  linkedInUrl: string | undefined;
};

const HistorySummary: React.FC<HistorySummaryProps> = ({ linkedInUrl }) => (
  <Card>
    Experience on a wide variety of products and teams: Startups, SaaS, Internal
    tooling, and client work. Fully remote for the past 4 years.
    {linkedInUrl && (
      <div className="sm:flex sm:space-x-4 sm:space-y-0 items-center justify-center space-y-4">
        <a
          href={linkedInUrl}
          className="sm:w-auto inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <FaLinkedin aria-hidden className="mr-3 size-7" />
          <div className="text-left">
            <div className="mb-1 text-xs">See full history on</div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              LinkedIn
            </div>
          </div>
        </a>
      </div>
    )}
  </Card>
);

export default HistorySummary;
