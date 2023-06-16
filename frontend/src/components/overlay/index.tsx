'use client';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { useOutsideClick } from '@/hooks/outSideClick';

import { IOverlay } from './types';
import { getStyles } from './styles';
import { ChildrenProps } from '../../types';

const listFocusable =
  'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, *[tabindex]:not([tabindex="-1"])';

export const Overlay = ({
  isOpen,
  setClose,
  onCreate,
  children,
  isAnimation,
  duration = 300,
}: ChildrenProps<IOverlay>) => {
  const childRef = useRef<HTMLDivElement>(null);

  const [isTouched, setIsTouched] = useState(false);

  const { overlay } = getStyles({ isAnimation });

  useOutsideClick(childRef, () => {
    if (isTouched) {
      setClose();
    }
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setClose();

    if ((childRef?.current === null && event.key) === 'Tab') {
      event.preventDefault();
    }

    if (childRef && event.key === 'Tab' && childRef.current) {
      const focusable =
        childRef.current.querySelectorAll<HTMLElement>(listFocusable);

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const firstFocusableElement = focusable[0];
      const lastFocusableElement = focusable[focusable.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsTouched(true);
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('keydown', handleKeyDown);

      if (childRef && childRef.current) {
        childRef.current.tabIndex = -1;
        childRef.current.style.outline = 'none';
        childRef.current.focus();
      }
    }

    return () => {
      document.body.removeAttribute('style');
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, childRef, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={overlay}
      style={!isAnimation ? { transitionDelay: `${duration - 300}ms` } : {}}
    >
      <div ref={childRef}>{children}</div>
    </div>,
    document.body,
  );
};
