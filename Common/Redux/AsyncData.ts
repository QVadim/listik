/** Статус асинхронной операции. */
enum EProcessStatus {
    IDLE = 'IDLE',
    RUNNING = 'RUNNING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    CANCELED = 'CANCELED',
}

/** Обёртка над серверными данными. */
type TAsyncData<T> = {
    status: EProcessStatus,
    data: T,
    errors: string[] | null,
}