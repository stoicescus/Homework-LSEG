import type { FC, ButtonHTMLAttributes } from 'react';

import classes from './button.module.scss';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button className={classes.btn} {...props}></button>
    );
}

export default Button;