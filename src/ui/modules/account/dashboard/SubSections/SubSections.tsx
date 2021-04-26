import React, { ReactNode, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeDashboardPath } from 'ui/constants/paths';
import ContentBlock from '../ContentBlock';
import SectionContent from '../SectionContent';
import SectionList from '../SectionList';
import type { Section } from '../types';

export default function SubSections({
  section,
  subSection,
  sections,
  children,
}: {
  section: string;
  subSection: string;
  sections: Section[];
  children: ReactNode;
}) {
  const { replace } = useHistory();
  useEffect(() => {
    if (section && !subSection && sections.length) {
      replace(makeDashboardPath({ section, subSection: sections[0].key }));
    }
  }, [replace, section, subSection, sections]);
  return (
    <div className="flex flex-col lg:flex-row flex-grow">
      <SectionList options={sections} current={subSection} />
      <SectionContent>
        <ContentBlock>{children}</ContentBlock>
      </SectionContent>
    </div>
  );
}
