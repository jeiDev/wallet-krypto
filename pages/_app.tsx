import type { AppProps } from 'next/app';
import "~/styles/global.css";
import "~/styles/default.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
