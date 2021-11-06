import { TitlePropsI } from "~/interfaces/apps/title/title.interface";
import style from "~/styles/apps/title.module.css";

const Title = ({children}: TitlePropsI) => {

    return(
        <span className={style.title}>
            {children}
        </span>
    )
}

export default Title;