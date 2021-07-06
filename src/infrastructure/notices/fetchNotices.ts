import jpex from 'jpex';
import type {
  GetNoticesReQuest,
  GetNoticesResponse,
} from '@sns/contracts/notice';
import type { FetchNotices } from 'core/notices';
import type { AuthDriver } from 'core/io';

jpex.factory<FetchNotices>(
  (driver: AuthDriver): FetchNotices =>
    async () => {
      const {
        data: { notices },
      } = await driver<GetNoticesReQuest, GetNoticesResponse>({
        url: '/notices/my',
      });

      return notices;
    },
);
