import type { Transaction } from '@sns/contracts/payment';

export type FetchTransactions = () => Promise<Transaction[]>;

export type WithdrawBalance = (args: { amount: number }) => Promise<void>;

export type StartPayment = (args: {
  orderId: string;
}) => Promise<{ paymentId: string }>;

export type CompletePayment = (args: { orderId: string }) => Promise<unknown>;
