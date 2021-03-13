/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalExample = (props) => {
    const {
        buttonLabel,
        modalClassName,
        className,
        title,
        content
    } = props;

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(false);

    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = e => {
        let value = e.target.value;
        setUnmountOnClose(value);
    }


    return (
        <div>
            <Button color="warning" onClick={toggle}>{buttonLabel}</Button>
            <Modal modalClassName={modalClassName} size="lg" unmountOnClose={unmountOnClose} isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}><h4>{title}</h4></ModalHeader>
                <ModalBody>
                    {content}
                </ModalBody>
                <ModalFooter className="pb-3">
                    <Button className="mx-auto" color="success" onClick={toggle}>Aceptar</Button>{' '}
                    <Button className="mx-auto" color="danger" onClick={toggle} >Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;