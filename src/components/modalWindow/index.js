import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import {
    renameItem,
    createItem,
    deleteItem
} from '../../slice/treeSlice';

const Modal = ({ id, type, name, close }) => {
    const dispatch = useDispatch();

    const [newName, SetNewName] = useState('');

    const sendRequest = () => {
        switch (type) {
            case 'Add':
            dispatch(createItem(id, newName));
            close();
            break;
            case 'Rename':
            dispatch(renameItem(id, newName));
            close();
            break;
            case 'Delete':
            dispatch(deleteItem(id));
            close();
            break;
            default:
            break;
        }
    };

    const handlerName =  (value) => {
        SetNewName(value);
    };

    return createPortal (
        <div className={style.wrapper}>
            <div className={style.window}>
                <h3>{type}</h3>
                {type !== 'Delete' && <input className={style.input} type='text' value={type === 'Rename' ? name : ''} onChange={(event) => handlerName(event.target.value)} />}
                {type === 'Delete' && <div className={style.input}>Do you want to delete?</div>}
                <div className={style.buttons}>
                    <button className={style.btn} onClick={close}>cancel</button>
                    <button className={style.btn} onClick={sendRequest}>{type}</button>
                </div>
            </div>
        </div>,
        document.body
    )
};

export default Modal;
