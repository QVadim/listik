import { useSelector, shallowEqual } from 'react-redux';

/**
 * useSelector с поверхностным сравнением.
 * Предотвращает лишние перерисовки при выборке объектов из стора.
 */
export const useShallowEqualSelector = <T>(selector: (state: any) => T): T =>
    useSelector(selector, shallowEqual);