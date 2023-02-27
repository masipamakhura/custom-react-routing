import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    const actionBar = <Button primary onClick={closeModal}>accept</Button>
    const modal = <Modal onClose={closeModal} actionBar={actionBar}>
        <p>paragraph chldren representing the content passed to the modal</p> </Modal>
    return <div>
        <Button secondary outline onClick={handleShowModal}> Open Modal</Button>
        {showModal && modal}
    </div>
}

export default ModalPage;