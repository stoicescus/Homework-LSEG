import { type FC, type ChangeEvent, useState } from 'react';

import Header from '../header/header';
import Chat from '../chat/chat';
import Footer from '../footer/footer';
import Button from '../shared/button/button';

import { getStocks, getListOfStockExchanges, getStock } from '../../data/data';
import type { IStock } from '../../utils/utils';

import './app.scss';

export interface IChatItem {
    title: string;
    question: string;
    answer: string[];
}

const stocks = getStocks();

const App: FC = () => {
    const [chatContent, setChatContent] = useState<IChatItem[]>([]);
    const [userInput, setUserInput] = useState('');
    const [currentStockExchange, setCurrentStockExchange] = useState('');

    const sendToChat = (chatData: any) => {
        setChatContent([...chatContent, chatData]);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }

    const gotoMainMenuHandler = () => {
        setChatContent([]);
    }

    const goBackHandler = () => {
        setChatContent((state) => state.slice(0, -1));
    }

    const clearInput = () => setUserInput('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const stockExchanges = getListOfStockExchanges(userInput);

        if (stocks && stocks.includes(userInput)) {
            sendToChat({
                title: 'Please select a stock.',
                question: userInput,
                answer: stockExchanges
            });

            setCurrentStockExchange(userInput);
        }

        if (currentStockExchange !== '') {
            const stock: IStock = getStock(currentStockExchange, userInput)!;

            if (stock) {
                sendToChat({
                    title: `Stock price of ${stock.stockName} is ${stock.price.toFixed(2)}. Please select an option.`,
                    question: userInput,
                    answer: [
                        <Button onClick={gotoMainMenuHandler}>Main menu</Button>, 
                        <Button onClick={goBackHandler}>Go Back</Button>
                    ]
                });
            }
        }

        clearInput();
    }

    return (
        <div className='app'>
            <Header />
            <Chat content={chatContent} />
            <Footer 
                userInput={userInput}
                onChangeHandler={onChangeHandler}
                submitHandler={submitHandler} 
            />
        </div>
    );
}

export default App;
