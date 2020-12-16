import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOptions}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearModal}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOptions && <p className="modal__body">{props.selectedOptions}</p>}
            <button className="button" onClick={props.handleClearModal}>Okay</button>
        </Modal>
    )
};

export default OptionModal;