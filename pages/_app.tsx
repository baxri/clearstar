import type { AppProps } from "next/app";
import Router from "next/router";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NProgress from "nprogress";

import theme from "../src/theme";

//@ts-ignore
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

//@ts-ignore
Router.onRouteChangeComplete = () => NProgress.done();

//@ts-ignore
Router.onRouteChangeError = () => NProgress.done();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
