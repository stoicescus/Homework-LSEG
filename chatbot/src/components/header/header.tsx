import { FaRocketchat } from "react-icons/fa6";

import classes from  './header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes['logo-icon']}><FaRocketchat /></div>
            <span className={classes['logo-text']}>LSEG chatbot</span>
        </header>
    );
}

export default Header;