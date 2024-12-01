import type { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import classes from  './table.module.scss';

interface TableProps {
    title: string;
    data: string[];
}

const Table: FC<TableProps> = ({ title, data }) => {
    const generateRows = () => {
        try {
            if (!Array.isArray(data)) {
                throw new Error('We need to pass an array as data to the Table Component.');
            }
    
            return data.map((item: any) => {
                return <div key={uuidv4()}>{ item }</div>;
            });
        } catch (err) {
            console.log((err as Error).message);
        }
    }

    return (
        <div className={classes.table}>
            <div className={classes.title}>{ title }</div>
            <div className={classes.content}>{ generateRows() }</div>
        </div>
    );
}

export default Table;