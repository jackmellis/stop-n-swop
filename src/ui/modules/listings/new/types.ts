import type { Condition, Region } from '@sns/contracts/listing';
import type { ImageUrl } from 'domain/types';

export interface Values {
  condition: Condition;
  description: string;
  boxed: boolean;
  instructions: boolean;
  images: ImageUrl[];
  price: number;
  region: Region;
}
