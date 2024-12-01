import type { FC, InputHTMLAttributes } from 'react';

import classes from  './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    icon?: JSX.Element;
}

const Input: FC<InputProps> = (props) => {
    const { icon } = props;

    const inputStyles = `
        ${classes.input} ,
        ${icon ? classes['has-icon'] : ''}
    `;
    
    return (
        <div className={classes['input-wrapper']}>
            <input 
                className={inputStyles} 
                type='text' 
                {...props} 
            />
            <div className={classes.icon}>{ icon }</div>
        </div>
    )
};

export default Input;