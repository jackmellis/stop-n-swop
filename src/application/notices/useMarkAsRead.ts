import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import type { MarkAsRead } from 'core/notices';

export const useMarkAsRead = encase((markAsRead: MarkAsRead) => () => {
  return useAction(markAsRead, []);
});
