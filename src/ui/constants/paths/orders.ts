export const MY_ORDERS = '/my/orders';

export const MY_ORDER = '/my/orders/:orderId';
export const makeMyOrderPath = ({ orderId }: { orderId: string }) =>
  `${MY_ORDERS}/${orderId}`;
