import { SubTitlePropsI } from "~/interfaces/apps/subtitle/subtitle.interface";

const SubTitle = ({children}: SubTitlePropsI) => {
    
    return(
        <p style={{paddingBottom: 50, paddingTop: 15, opacity: .7, fontSize: "1em", fontWeight: 200}}>{children}</p>
    )
}

export default SubTitle;