import jpex from 'jpex';
import type { MarkAsRead } from 'core/notices';
import type { AuthDriver } from 'core/io';

jpex.factory<MarkAsRead>((driver: AuthDriver) => async () => {
  await driver({
    url: '/notices/my/viewed',
    method: 'POST',
  });
});
