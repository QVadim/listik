import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

/**
 * Хук для создания экземпляра класса экшенов с привязанным dispatch.
 * Используется в компонентах вместо прямого вызова useDispatch.
 */
export const useActions = <T>(ActionsClass: new (dispatch: Function) => T): T => {
    const dispatch = useDispatch();
    return useMemo(() => new ActionsClass(dispatch), [dispatch]);
};