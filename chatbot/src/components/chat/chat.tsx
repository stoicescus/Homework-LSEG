import { type FC, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Textbox from '../shared/textbox/textbox';
import Table from '../shared/table/table';
import AnswerBox from '../shared/answer-box/answer-box';

import { getStocks } from '../../data/data';
import { IChatItem } from '../app/app';

import classes from  './chat.module.scss';

interface ChatProps {
    content: IChatItem[];
}

const renderContent = (content: IChatItem[]) => {
    return (
        content && content.length > 0 && content.map(item => {
            return (
                <Fragment key={uuidv4()}>
                    <Textbox text={item.question} />
                    <AnswerBox>
                        <Table title={item.title} data={item.answer} />
                    </AnswerBox>
                </Fragment>
            );
        })
    );
}

const Chat: FC<ChatProps> = ({ content }) => {
    const stocks = getStocks();

    return (
        <main className={classes.chat}>
            <Textbox text='Hello! Welcome to LSEG. I&apos;m here to help you.' />
            {
                stocks && 
                <AnswerBox>
                    <Table title='Please select a stock exchange.' data={stocks} />
                </AnswerBox>
            }
            { renderContent(content) }
        </main>
    );
};

export default Chat;