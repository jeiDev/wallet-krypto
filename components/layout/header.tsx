import Link from "next/link";
import Head from "next/head";
import style from "~/styles/layout/header.module.css";
import { navSetting } from "~/settings/nav.setting";


const Header = () => {

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <header className={style.header}>
                <div className="container">
                    <div className={style.contain}>
                        <div className={style.logo}>
                            <h1>
                                <Link href="/">
                                    <a>Krypto</a>
                                </Link>
                            </h1>
                        </div>
                        <div className={style.nav}>
                            <ul>
                                {navSetting.map((nav, i) => (
                                    <li key={i}>
                                        <Link href={nav.link}>
                                            <a>{nav.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className={style.boxLanguage}>
                                <div className={style.activeLanguage}>
                                    <div className={style.contenFlagLanguage}>
                                        <img src="/images/language/usa.png" alt="usa language" />
                                    </div>
                                    <img src="/images/language/arrow-down.png" alt="arrow down language" />
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;