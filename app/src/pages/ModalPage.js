import { useState } from "react";
import Modal  from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal,setShowModal] = useState(false);

    const handleShowModal = () =>{
        setShowModal(!showModal)
    }

    return <div>
        <Button secondary outline onClick={handleShowModal}> Open Modal</Button>
        {showModal && <Modal />}
    </div>
}

export default ModalPage;