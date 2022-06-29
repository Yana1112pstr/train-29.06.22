import React from 'react';
import MyButton from '../button/MyButton';
import s from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootClasses = [s.myModal]
    if (visible) {
        rootClasses.push(s.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={s.myModalContent} onClick={(e) => e.stopPropagation()}>
                <MyButton type="button" onClick={() => setVisible(false)}>x</MyButton>
                {children}
            </div>
        </div>
    );
};

export default MyModal;