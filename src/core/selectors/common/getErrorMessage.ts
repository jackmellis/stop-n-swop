import { IntlShape } from 'react-intl';
import { ids } from 'ui/messages';

const hasError = (e: any): e is { error: string } => {
  return Boolean(e?.error);
};
const hasMessage = (e: any): e is { message: string } => {
  return Boolean(e?.message);
};
const hasStatus = (e: any): e is { status: number } => {
  return Boolean(e?.status);
};

export default function getErrorMessage(error: any, intl: IntlShape) {
  if (hasError(error)) {
    return error.error;
  }
  if (hasMessage(error)) {
    return error.message;
  }
  if (hasStatus(error)) {
    switch (error?.status) {
      case 400:
        return intl.formatMessage({ id: ids.error.badRequest });
      case 403:
        return intl.formatMessage({ id: ids.error.forbidden });
      case 404:
        return intl.formatMessage({ id: ids.error.notFound });
      case 409:
        return intl.formatMessage({ id: ids.error.conflict });
      case 503:
        return intl.formatMessage({ id: ids.error.unavailable });
      case 504:
        return intl.formatMessage({ id: ids.error.gatewayTimeout });
      default:
    }
  }

  return intl.formatMessage({ id: ids.error.unknown });
}
