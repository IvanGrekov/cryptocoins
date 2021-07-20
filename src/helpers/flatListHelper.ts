import { CoinInterface } from '../type';

export const createKeyExtractor = (item: CoinInterface) =>
  `${item.id}${item.current_price}`;
