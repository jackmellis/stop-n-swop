import { Notice, Type } from '@sns/contracts/notice';
import DefaultNotice from './states/DefaultNotice';
import ListingNotPaid from './states/ListingNotPaid';
import OrderCancelled from './states/OrderCancelled';
import OrderDeclined from './states/OrderDeclined';
import OrderNotPaid from './states/OrderNotPaid';
import OrderPaid from './states/OrderPaid';
import OrderPlaced from './states/OrderPlaced';
import OrderPosted from './states/OrderPosted';
import OrderReceived from './states/OrderReceived';

const matrix = {
  [Type.ORDER_PLACED]: OrderPlaced,
  [Type.ORDER_CANCELLED]: OrderCancelled,
  [Type.ORDER_DECLINED]: OrderDeclined,
  [Type.ORDER_PAID]: OrderPaid,
  [Type.LISTING_NOT_PAID]: ListingNotPaid,
  [Type.ORDER_NOT_PAID]: OrderNotPaid,
  [Type.ORDER_POSTED]: OrderPosted,
  [Type.ORDER_RECEIVED]: OrderReceived,
};

export const getNoticeComponent = (notice: Notice) => {
  return matrix[notice.type] ?? DefaultNotice;
};
