import useUserContext from "../../../hooks/useUserContext";
import DeleteGoogleUser from "./DeleteGoogleUser";
import DeleteEmailUser from "./DeleteEmailUser";

type ModalProps = {
  modalRef: React.RefObject<HTMLDialogElement | null>
}

function Modal({ modalRef }: ModalProps) {
  const currentUser = useUserContext();

  const closeModal = () => {
    if (modalRef.current) 
      modalRef.current.close();
  }

  return (
    <dialog 
    ref={modalRef}
    className="open:flex open:flex-col open:items-center open:gap-4 bg-white p-5 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
    >
      <h3 className="text-xl font-semibold">
        Confirm action
      </h3>
      <p>Are you sure you want to continue?</p>

      {currentUser?.isGoogleUser ? <DeleteGoogleUser /> : <DeleteEmailUser />}

      <button 
      onClick={closeModal}
      className="py-1 px-3 cursor-pointer"
      >
        Cancel
      </button>
    </dialog>
  )
}

export default Modal;