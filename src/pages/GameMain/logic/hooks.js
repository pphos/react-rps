import { useRef, useEffect } from 'react';

/**
 * setInterval内でuseStateで定義したステートを更新するためのカスタムフック
 * @param  val : useStateで定義したステート
 */
export function useValueRef(val) {
  const ref = useRef(val);

  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref;
}