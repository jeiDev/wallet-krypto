import { ReactElement } from "react";

export interface SliderRenderParamI{
    item: any
    index: number
}

export interface SliderRenderI {
    ({item, index}: SliderRenderParamI): ReactElement
}

export interface SliderPropsI {
    items: Array<any>
    Render: SliderRenderI
    grid: number
}