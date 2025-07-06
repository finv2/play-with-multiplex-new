"use client";

import cn from "classnames";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import React, { useEffect, useRef, useState } from "react";

function Modal({
  outerClassName = "",
  isOpen = false,
  setIsOpen = () => {},
  showCloseBtn = true,
  children = null,
  isDisableOutsideClick = false,
  invisible = false,
}) {
  const modalRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  // Mark as client after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, setIsOpen]);

  // Outside click close
  const handleOutsideClick = (e) => {
    if (
      !isDisableOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={cn(styles.overlay)}
      id="modal"
      onClick={handleOutsideClick}
      style={{
        display: "flex",
        opacity: invisible ? 0 : 1
      }}
    >
      <div
        className={cn(styles.content, outerClassName)}
        style={{ opacity: invisible ? 0 : 1, height: "auto !important" }}
      >
        {showCloseBtn && (
          <div className={cn(styles.close)} onClick={() => setIsOpen(false)}>
            x
          </div>
        )}
        <div ref={modalRef}>{children}</div>
      </div>
    </div>
  );

  // During SSR: return plain content (no portal)
  // After client mount: render in portal
  return isClient ? createPortal(modalContent, document.body) : modalContent;
}

export default Modal;
