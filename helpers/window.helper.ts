import { BreakPointCallbackI, BreakPointParamI } from "~/interfaces/helpers/window/window.interface"

export const breakPoints = (width: number, points: BreakPointParamI, next: BreakPointCallbackI) => {
    Object.keys(points).forEach((key: string) => {
        let values = points[key];
        if(!values) return next(null);
        const min = values.min;
        const max = values.max;

        if(!max && min){
            if(width >= min) {
                return next(parseInt(key));
            }
        }

        if(!min && max){
            if(width <= max) {
                return next(parseInt(key));
            }
        }

        if(min && max && width >= min && width <= max){
            return next(parseInt(key));
        }

        return next(null);
    })
}