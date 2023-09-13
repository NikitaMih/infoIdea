import React, { useState } from 'react';
import style from './style.module.scss';
import plus from '../../assets/plus.svg';
import pen from '../../assets/pen.svg';
import basket from '../../assets/basket.svg';
import Modal from '../modalWindow';

const Actions = ({ id, name }) => {
    const [showModal, SetShowModal] = useState(false);
    const [type, SetType] = useState('');

    const createModal = (value) => {
        SetShowModal(true);
        SetType(value);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        SetShowModal(false);
        document.body.style.overflow = 'visible';
    };

    return (
        <>
            <button className={style.btn} onClick={() => createModal('Add')}>
                <img className={style.img} src={plus} alt='plus'/>
            </button>
            <button className={style.btn} onClick={() => createModal('Rename')}>
                <img className={style.img} src={pen} alt='pen'/>
            </button>
            <button className={style.btn} onClick={() => createModal('Delete')}>
                <img className={style.img} src={basket} alt='basket'/>
            </button>
            {showModal && <Modal id={id} type={type} name={name} close={closeModal}/>}
        </>
    )
};

export default Actions;
