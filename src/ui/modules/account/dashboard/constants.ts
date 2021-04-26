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
        key: 'email',
        to: makeDashboardPath({ section: 'about-me', subSection: 'email' }),
        label: ids.account.dashboard.sections.aboutMe.email,
      },
      {
        key: 'address',
        to: makeDashboardPath({ section: 'about-me', subSection: 'address' }),
        label: ids.account.dashboard.sections.aboutMe.address,
      },
    ],
  },
  {
    key: 'orders',
    label: ids.account.dashboard.sections.orders,
    to: MY_ORDERS,
  },
  {
    key: 'listings',
    label: ids.account.dashboard.sections.listings,
    to: MY_LISTINGS,
  },
];
