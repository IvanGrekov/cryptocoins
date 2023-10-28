import { CoinInterface } from '../types';

export const createKeyExtractor = (item: CoinInterface) =>
  `${item.id}${item.current_price}`;
