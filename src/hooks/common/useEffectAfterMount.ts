import { DependencyList, EffectCallback, useEffect, useRef } from "react";

const useEffectAfterMount = (
  callback: EffectCallback,
  deps?: DependencyList
) => {
  let isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) {
      return callback();
    } else {
      isFirstMount.current = false;
    }
  }, deps);
};

export default useEffectAfterMount;
