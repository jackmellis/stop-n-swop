import { makeDashboardPath, MY_LISTINGS, MY_ORDERS } from 'ui/constants/paths';
import { ids } from 'ui/messages';
import type { Section } from './types';

export const sections: Section[] = [
  {
    key: 'about-me',
    label: ids.account.dashboard.sections.aboutMe.label,
    to: makeDashboardPath({ section: 'about-me' }),
    sections: [
      {
        key: 'username',
        to: makeDashboardPath({ section: 'about-me', subSection: 'username' }),
        label: ids.account.dashboard.sections.aboutMe.username,
      },
      {
        key: 'details',
        to: makeDashboardPath({
          section: 'about-me',
          subSection: 'details',
        }),
        label: ids.account.dashboard.sections.aboutMe.details,
      },
      {
        key: 'address',
        to: makeDashboardPath({ section: 'about-me', subSection: 'address' }),
        label: ids.account.dashboard.sections.aboutMe.address,
      },
    ],
  },
];
