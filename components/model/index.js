'use client';

import cn from "classnames";
import { createPortal } from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import styles from "./Modal.module.scss";

function Modal({
  outerClassName = "",
  containerClassName = "",
  isOpen = false,
  onClose = () => {},
  showCloseBtn = true,
  children = null,
  size = "sm",
  isDisableOutsideClick = false,
  title = null,
  closeIconClassName = "",
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
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Outside click close
  const handleOutsideClick = (e) => {
    if (
      !isDisableOutsideClick &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className={cn(styles.modal)} id="modal" onClick={handleOutsideClick}>
      <div
        className={cn(
          styles.outer,
          {
            [styles.sm]: size === "sm",
            [styles.m]: size === "m",
            [styles.md]: size === "md",
            [styles.lg]: size === "lg",
          },
          outerClassName
        )}
      >
        <div
          ref={modalRef}
          className={cn(styles.container, containerClassName)}
        >
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.content}>{children}</div>
          {showCloseBtn && (
            <div className={cn(styles.close)} onClick={onClose}>
              <CgCloseR
                size={20}
                className={cn(styles.closeIcon, closeIconClassName)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // During SSR: return plain content (no portal)
  // After client mount: render in portal
  return isClient ? createPortal(modalContent, document.body) : modalContent;
}

export default Modal;

