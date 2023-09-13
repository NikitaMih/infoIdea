import React, { useState } from 'react';
import style from './style.module.scss';
import TreeList from '../treeList';
import arrow from '../../assets/arrow.svg'
import Actions from '../actions';

const TreeItem = ({ id, name, children, show }) => {

    const [sh, SetSh] = useState(false);
    const [actions, SetActions] = useState(false);

    const showList = () => {
        SetSh(!sh);
    };

    const activeActions = () => {
        SetActions(!actions);
    };


    return (
        <>
            {!!children.length 
                ? <li className={style.item} style={{display: show ? 'block' : 'none'}} key={id}>
                    <button className={style.btn} onClick={showList}>
                        <img style={{transform: sh ? 'rotate(90deg)' : 'rotate(0deg)'}} className={style.arrow} src={arrow} alt='arrow'/>
                    </button>
                    <span onClick={activeActions}>{name}</span>
                    {actions && <Actions id={id} name={name}/>}
                    <TreeList items={children} show={sh}/>
                  </li> 
                : <li className={style.item} style={{display: show ? 'block' : 'none'}} key={id}>
                    <span onClick={activeActions}>{name}</span>
                    {actions && <Actions id={id} name={name}/>}
                  </li>}
        </>
    )
};

export default TreeItem;