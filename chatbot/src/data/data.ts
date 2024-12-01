import data from './Chatbot - stock data.json';
import { checkData } from '../utils/utils';

export const getStocks = () => {
    // Returns an array with all the stock exchanges.
    // It is used to dispplay the initial list of stock exchanges.

    try {
        if (checkData(data)) {
            return data.map(item => item.stockExchange);
        }
    } catch (err) {
        console.log((err as Error).message);
    }
}

export const getListOfStockExchanges = (stockExchange: string) => {
    // Returns an array with all the stocks for a given stock exchange.

    try {
        if (checkData(data)) {
            const stock = data.find((item) => item.stockExchange === stockExchange);

            if (stock) {
                const stockExchangeValues = stock.topStocks.map(item => item.stockName);
                return stockExchangeValues;
            }
        }
    } catch (err) {
        console.log((err as Error).message);
    }
}

export const getStock = (stockExchange: string, stockName: string) => {
    // Returns a specific stock for a given stock exchange and a stock name.

    try {
        if (checkData(data)) {
            let stockExchangeObject = data.find(item => item.stockExchange === stockExchange);

            if (stockExchangeObject) {
                let stock = stockExchangeObject.topStocks.find(item => item.stockName === stockName);
                return stock;
            }
        }
    } catch (err) {
        console.log((err as Error).message);
    }
}