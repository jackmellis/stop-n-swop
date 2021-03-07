import { flatten, unflatten } from 'flat';

const enMessages = {
  error: {
    unknown: 'An unknown error has ocurred',
    badRequest: 'Malformed request syntax',
    forbidden: 'You are not authorised to carry out this action',
    notFound: 'The requested resource could not be found or does not exist',
    conflict: 'Conflict in the current resource state',
    unavailable: 'The service is currently unavailable, please try again',
    gatewayTimeout: 'The service is currently unavailable, please try again',
  },
};

// this just creates us a deeply nested object of ids
// i.e. ids.signin.title === 'signin.title'
export const ids: typeof enMessages = unflatten(
  Object.fromEntries(Object.keys(flatten(enMessages)).map((key) => [key, key])),
);

export const en: Record<string, string> = flatten(enMessages);
