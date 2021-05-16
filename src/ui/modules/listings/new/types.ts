import type { Condition, Region } from '@sns/contracts/listing';

export interface Values {
  condition: Condition;
  description: string;
  boxed: boolean;
  instructions: boolean;
  images: Record<string, string>;
  price: number;
  postage: number;
  region: Region;
}
