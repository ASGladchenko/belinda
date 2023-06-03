'use client';
import { useCallback, useEffect, useRef } from 'react';

import { ITooltip } from './types';

export default function Tooltip({ isOpen, children, setIsOpen }: ITooltip) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen();
      }
    },
    [setIsOpen],
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isOpen, handleClick]);

  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="absolute -bottom-5  py-2 left-1/2 translate-x-[-50%] translate-y-full border bg-admin-lighten-second dark:bg-admin-darken-second min-w-[24px] rounded-lg border-admin-lighten-border dark:border-admin-darken-border"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <div className="absolute top-0 left-[50%] w-3 h-3 border-l border-t translate-x-[-50%] translate-y-[-7px] rotate-45 bg-admin-lighten-second dark:bg-admin-darken-second border-admin-lighten-border dark:border-admin-darken-border" />
        </div>
      )}
    </>
  );
}
