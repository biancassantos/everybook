import { useRef } from "react";

/* Waits [delay] seconds to set the parameter text used in the api fetching to prevent too many requests */

type CallbackFunction = () => void;

function useDebounce(fn: CallbackFunction, delay: number) {
  const timeoutRef = useRef<undefined | number>(undefined);

  return () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn();
    }, delay)
  }
}

export default useDebounce;