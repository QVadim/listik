/** Статус асинхронной операции. */
export enum EProcessStatus {
    /** Начальное состояние. Запрос ещё не отправлен. */
    IDLE = 'IDLE',
    /** Запрос отправлен, ответ ещё не получен. */
    RUNNING = 'RUNNING',
    /** Запрос выполнен успешно, данные получены. */
    SUCCESS = 'SUCCESS',
    /** Запрос завершился ошибкой. */
    FAIL = 'FAIL',
    /** Запрос был отменён до получения ответа. */
    CANCELED = 'CANCELED',
}

/** Обёртка над серверными данными. */
export type TAsyncData<T> = {
    status: EProcessStatus,
    data: T | null,
    errors: string[] | null,
}

/**
 * Создаёт начальное состояние асинхронных данных.
 * Используется в редьюсерах как дефолтное значение.
 */
export const createSimpleAsyncParticle = <T>(): TAsyncData<T> => ({
    status: EProcessStatus.IDLE,
    data: null,
    errors: null,
});