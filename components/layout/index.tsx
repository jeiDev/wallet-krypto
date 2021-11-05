import { LayoutPropsI } from "~/interfaces/layout/layout.interface";
import Header from "./header";
import Footer from "./footer";
import style from "~/styles/layout/layout.module.css";

const Layout = ({children}: LayoutPropsI) => {

    return (
        <div className={style.container}>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;