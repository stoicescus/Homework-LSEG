export interface IStock {
    code: string;
    stockName: string;
    price: number;
}

interface IStockExchange {
    code: string;
    stockExchange: string;
    topStocks: IStock[];
}

type IData = IStockExchange[];

export const checkData = (data: IData) => {
    try {
        if (data && Array.isArray(data) && data.length) {
            return true;
        } else {
            throw new Error('Something wrong happened when trying to use the application data.');
        }
    } catch (err) {
        console.log((err as Error).message);
    }
}