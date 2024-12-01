import type { FC, ReactNode } from 'react';
import { FaRocketchat } from "react-icons/fa6";

import classes from './answer-box.module.scss';

interface AnswerBoxProps {
    children: ReactNode;
}

const AnswerBox: FC<AnswerBoxProps> = ({ children }) => {
    return (
        <div className={classes['answer-box']}>
            <div className={classes.icon}><FaRocketchat /></div>
            { children }
        </div>
    );
}

export default AnswerBox;