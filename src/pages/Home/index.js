import React from 'react';
import style from './style.module.scss';
import Tree from '../../components/tree/index';

const Home = () => {
    return (
        <div className={style.wrapper}>
            <Tree/>
        </div>
    )
};

export default Home;
