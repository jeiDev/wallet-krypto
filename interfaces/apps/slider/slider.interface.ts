import { ReactElement } from "react";

export interface SliderItemI {

}

export interface SliderRenderParamI{
    item: SliderItemI
    index: number
}

export interface SliderRenderI {
    ({item, index}: SliderRenderParamI): ReactElement
}

export interface SliderPropsI {
    items: Array<SliderItemI>
    Render: SliderRenderI
    grid: number
}