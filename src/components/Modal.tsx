import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string;
};

export default function Modal({ isOpen, onClose, imageSrc, imageAlt = "" }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="modal-image-wrap">
          <img src={imageSrc} alt={imageAlt} className="modal-image" />
        </div>
      </div>
    </div>
  );
}
