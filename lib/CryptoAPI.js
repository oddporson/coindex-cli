const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`)
      
      let output = '';

      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} (${coin.name.red}) | Price: ${coin.price} | Rank: ${coin.rank.blue}`;
      });

      return output;
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = CryptoAPI;
