import { breakPoints } from "~/helpers/window.helper";
import { breakPointPriceHome } from "~/settings/home.setting";

const breakPoint = (callback: Function) => {
    breakPoints(window.innerWidth, breakPointPriceHome, (grid) => {
        if(!grid) return;
        callback(grid);
    
        window.addEventListener('resize', () => {
            breakPoints(window.innerWidth, breakPointPriceHome, (grid) => {
                if(!grid) return;
                callback(grid);
            });
        });
    })
}

export default breakPoint;