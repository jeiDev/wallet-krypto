export interface BreakPointObjectI {
    min?: number
    max?: number
}

export interface BreakPointParamI {
    [key: string|number]: BreakPointObjectI
}

export interface BreakPointCallbackI {
    (grid: number | null): void
}