export interface CoinInterface {
  id: 'string';
  symbol: 'string';
  name: 'string';
  image: 'string';
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
}

export enum ImageSizeType {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
}
