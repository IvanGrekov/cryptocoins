const baseURL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';

export const getCoinsList = () =>
  fetch(baseURL).then(response => response.json());
