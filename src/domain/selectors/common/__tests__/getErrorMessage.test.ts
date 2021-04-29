import { CommonCode } from '@sns/contracts/common';
import { ids } from 'ui/messages';
import getErrorMessage from '../getErrorMessage';

it.each`
  error                                          | message
  ${null}                                        | ${null}
  ${{ error: { code: CommonCode.BAD_REQUEST } }} | ${ids.error[CommonCode.BAD_REQUEST]}
  ${{ error: { code: CommonCode.VALIDATION } }}  | ${null}
  ${new Error('something went wrong')}           | ${'something went wrong'}
  ${{ status: 400 }}                             | ${ids.error[CommonCode.BAD_REQUEST]}
  ${{ status: 500 }}                             | ${ids.error.unknown}
`('returns the correct message', ({ error, message }) => {
  const intl = {
    message: jest.fn((x) => x),
  };
  const result = getErrorMessage(error, intl as any);

  expect(result).toBe(message);
});
