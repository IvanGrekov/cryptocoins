const MAX_COINS_LENGTH = 250;
export const COINS_PER_PAGE = 10;
export const MAX_PAGE_NUMBER = MAX_COINS_LENGTH / COINS_PER_PAGE + 1;

const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${COINS_PER_PAGE}`;

export const getCoinsList = (page: number = 1) =>
  fetch(`${baseURL}&page=${page}`)
    .then(response => response.json())
    .catch(e => {
      console.error(e);

      return [];
    });
