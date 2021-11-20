import type { AppProps } from 'next/app';

import "~/styles/root.css";
import "~/styles/global.css";
import "~/styles/grid-system.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
