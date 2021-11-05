import { LayoutPropsI } from "~/interfaces/layout/layout.interface";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children}: LayoutPropsI) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;