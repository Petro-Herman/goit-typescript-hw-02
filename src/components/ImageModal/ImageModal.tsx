import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

interface ImageModalProps {
  isOpen: boolean;
  value: {
    urls: { full: string };
    description: string;
  };
  modalOff: () => void;
}

export default function ImageModal({
  isOpen,
  value,
  modalOff,
}: ImageModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={modalOff}>
      <img src={value.urls.full} alt={value.description} className={css.img} />
    </ReactModal>
  );
}
