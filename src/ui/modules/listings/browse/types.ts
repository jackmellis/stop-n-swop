import type { Condition, Region } from '@sns/contracts/listing';

export interface Values {
  features: Array<'boxed' | 'unboxed' | 'instructions'>;
  condition: Condition[];
  region: Region[];
  priceRanges: Array<[number, number]>;
  rating: number;
}
