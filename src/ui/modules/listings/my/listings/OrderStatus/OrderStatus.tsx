import React from 'react';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { colorMatrix, iconMatrix } from 'ui/modules/listings/utils';
import type { Status } from '@sns/contracts/order';

export default function OrderStatus({ status }: { status: Status }) {
  const Icon = iconMatrix[status];
  const color = colorMatrix[status];

  return (
    <div className="flex items-center space-x-4 px-4 py-3 font-medium w-full text-center lg:text-left">
      <span className={color}>
        <Icon size="2rem" />
      </span>
      <span>
        {useMessage(ids.order.status[status] ?? ids.order.status.open)}
      </span>
    </div>
  );
}
