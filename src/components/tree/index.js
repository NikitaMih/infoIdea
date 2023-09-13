import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './style.module.scss';
import {
    selectTree,
    getTree
} from '../../slice/treeSlice';
import { useDispatch } from 'react-redux';
import TreeItem from '../treeItem';
import arrow from '../../assets/arrow.svg';

const Tree = () => {
    const dispatch = useDispatch();   
    const [show, SetShow] = useState(false);

    useEffect(() => {
        dispatch(getTree());
    },[]);

    const tree = useSelector(selectTree);
    const childrenEl = [] && tree.children;

    const showList = () => {
        SetShow(!show);
    };

    return (
        <ul>
            <li>
                <button className={style.btn} onClick={showList}>
                    <img style={{transform: show ? 'rotate(90deg)' : 'rotate(0deg)'}} className={style.arrow} src={arrow} alt='arrow'/>
                </button>
                <span>Root</span>
            </li>
            <ul className={style.wrapper}>
                {childrenEl?.map((item) => <TreeItem {...item} show={show}/>)}
            </ul>
        </ul>
    )
};

export default Tree;
