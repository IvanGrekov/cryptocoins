const maxCoinsLength = 250;
export const coinsPerPage = 10;
export const maxPagesNumber = maxCoinsLength / coinsPerPage + 1;

const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}`;

export const getCoinsList = (page: number = 1) =>
  fetch(`${baseURL}&page=${page}`)
    .then(response => response.json())
    .catch(e => {
      console.error(e);

      return [];
    });
