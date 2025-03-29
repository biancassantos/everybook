import { useRef } from "react";
import DeleteButton from "./DeleteButton";
import Modal from "./Modal";

function DeleteUserArea() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current)
      modalRef.current.showModal();
  }

  return (
    <section>
      <DeleteButton onClick={openModal} />
    
      <Modal modalRef={modalRef} />
    </section>
  )
}

export default DeleteUserArea;