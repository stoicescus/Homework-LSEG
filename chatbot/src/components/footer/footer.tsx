import type { FC, ChangeEvent, FormEvent } from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";

import Input from '../shared/Input/input';

import classes from  './footer.module.scss';

interface FooterProps {
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    submitHandler: (e: FormEvent) => void;
    userInput: string;
}

const Footer: FC<FooterProps> = ({ onChangeHandler, submitHandler, userInput }) => {
    return (
        <footer className={classes.footer}>
            <form onSubmit={submitHandler}>
                <Input 
                    type='text' 
                    placeholder='Please pick an option.'
                    icon={<FaCircleArrowRight />}
                    onChange={onChangeHandler}
                    value={userInput}
                />
            </form>
        </footer>
    );
};

export default Footer;