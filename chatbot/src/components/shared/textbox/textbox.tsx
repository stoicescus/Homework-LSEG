import type { FC } from 'react';

import classes from  './textbox.module.scss';

interface TextboxProps {
    text: string;
}

const Textbox: FC<TextboxProps> = ({ text }) => {
    return <span className={classes.textbox}>{ text }</span>;
}

export default Textbox;