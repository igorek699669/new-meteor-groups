//based on https://github.com/jmlweb/isMounted
import { useRef, useEffect } from 'react';

/**
 * Используется для проверки, что компонент демонтирован
 * ВАЖНО!!! Не забываем проверять current!
 * Пример:
 * const unmounted = useUnmounted();
 * ...
 * if (unmounted.current) {
 *   ...
 * }
 */
export const useUnmounted = (): { current: boolean } => {
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  //К сожалению, нельзя возвращать unmounted.current, будет ошибка
  return unmounted;
};
