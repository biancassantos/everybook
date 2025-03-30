import { useRef } from "react";

/* Waits [delay] seconds to execute a function in order to prevent too many requests */

type CallbackFunction = () => void;

function useDebounce(fn: CallbackFunction, delay: number) {
  const timeoutRef = useRef<undefined | NodeJS.Timeout>(undefined);

  return () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn();
    }, delay)
  }
}

export default useDebounce;