type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare class HelloJs {
    constructor();
    test1(): void;
}
export declare namespace HelloJs {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => HelloJs;
    }
}
export declare function platform(): string;