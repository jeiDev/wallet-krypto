import Link from "next/link";
import { footerInfoSetting } from "~/settings/footer.setting";
import style from "~/styles/layout/footer.module.css";
import classnames from "classnames";

const { copyRight, links, socials, items } = footerInfoSetting;

const Footer = () => {

    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.up}>
                    <div className={style.item}>
                        <h4>Krypto</h4>
                        <p>Massa blandit semper varius faucibus. Suspendisse viverra venenatis placerat nam ut. Pellentesque sit id tempor turpis.</p>
                    </div>

                    <div className={style.item}>
                        <h4>Links</h4>
                        <ul>
                            {items.links.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.link}>
                                        <a>{link.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.item}>
                        <h4>Legal</h4>
                        <ul>
                            {items.legal.map((data, i) => (
                                <li key={i}>
                                    <Link href={data.link}>
                                        <a>{data.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={classnames(style.item, style.newsletter)}>
                        <h4>Newsletter</h4>
                        <p className={style.subtitle}>Over 25000 people have subscribed</p>

                        <div className={style.boxGroup}>
                            <div className={style.input} placeholder="Enter your email" contentEditable={true}></div>
                            <button>Subscribe</button>
                        </div>
                        <p className={style.lastP}>We don’t sell your email and spam</p>
                    </div>
                </div>

                <div className={style.down}>
                    <div>
                        <ul>
                            {links.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.link}>
                                        <a>{link.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={style.center}>
                        <p>{copyRight}</p>
                    </div>
                    <div>
                        <ul>
                            {socials.map((social, i) => (
                                <li key={i}>
                                    <Link href={social.link}>
                                        <a>
                                            <img src={`/images/social/${social.image}.png`} alt="" />
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;