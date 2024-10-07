import React, { useEffect, useRef } from "react";
export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  const callbackRef = useRef<(event: MouseEvent | TouchEvent) => void>();
  callbackRef.current = callback;
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (callbackRef.current && !ref?.current?.contains(e.target as Node)) {
        callbackRef.current(e);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, callbackRef]);
};
