import React, { ReactNode, useEffect } from 'react';
import { makeDashboardPath } from 'ui/constants/paths';
import { useHistory } from 'react-router-dom';
import SectionList from '../SectionList';
import SectionContent from '../SectionContent';
import SubSections from '../SubSections';
import type { Section } from '../types';

export default function Sections({
  sections,
  section,
  subSection,
  children,
}: {
  sections: Section[];
  section: string;
  subSection: string;
  children: ReactNode;
}) {
  const { replace } = useHistory();
  useEffect(() => {
    if (!section) {
      replace(makeDashboardPath({ section: 'about-me' }));
    }
  }, [replace, section]);

  const subsections =
    sections.find(({ key }) => key === section)?.sections ?? [];

  return (
    <div className="flex flex-col lg:flex-row flex-grow mt-4">
      <SectionList current={section} options={sections} />
      <SectionContent>
        <SubSections
          section={section}
          subSection={subSection}
          sections={subsections}
        >
          {children}
        </SubSections>
      </SectionContent>
    </div>
  );
}
