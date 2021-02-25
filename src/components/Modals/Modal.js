/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';


const ModalExample = (props) => {
    const {
        buttonLabel,
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
            <Modal size="lg" unmountOnClose={unmountOnClose} isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {content}
                </ModalBody>
                <ModalFooter className="pb-3">
                    <Button className="mx-auto" color="success" onClick={toggle}>Do Something</Button>{' '}
                    <Button className="mx-auto" onClick={toggle} >Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;