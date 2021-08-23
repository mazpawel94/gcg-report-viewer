import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ModalWithDiagramId = ({ id, closeCallback }) => {
    return (
        <Modal onClose={closeCallback} open={true}>
            <Modal.Header>Pomyślnie dodano</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>
                        Twoje zadanie jest dostępne pod adresem localhost:3000/zadania/{id}
                    </Header>
                    <p>Jeżeli dodałeś je przez przypadek, wciśnij przycisk 'anuluj'</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={closeCallback}>
                    anuluj
                </Button>
                <Button
                    content="akceptuj"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={closeCallback}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
};

export default ModalWithDiagramId;
