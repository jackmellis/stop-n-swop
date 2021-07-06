import React, { ComponentType, ReactNode } from 'react';
import { ListItem } from 'ui/elements/list';
import { Info } from './icons';

export default function NoticeItem({
  Icon = Info,
  children,
  actions,
  viewed,
}: {
  Icon?: ComponentType<any>;
  actions?: ReactNode;
  viewed: boolean;
  children: ReactNode;
}) {
  return (
    <ListItem className="relative flex flex-grow space-x-8 px-8 py-4 items-center">
      <div>
        <Icon size="1.5em" />
      </div>
      <div className="flex-grow">{children}</div>
      <If condition={actions}>
        <div className="flex lg:space-x-8 flex-col lg:flex-row">{actions}</div>
      </If>
      <If condition={!viewed}>
        <div className="bg-primary absolute top-3 -left-6 rounded-full w-2 h-2" />
      </If>
    </ListItem>
  );
}
