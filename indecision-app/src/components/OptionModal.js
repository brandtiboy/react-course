import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOptions}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearModal}
        >
            <h3>Selected Option</h3>
            {props.selectedOptions && <p>{props.selectedOptions}</p>}
            <button onClick={props.handleClearModal}>Okay</button>
        </Modal>
    )
};

export default OptionModal;