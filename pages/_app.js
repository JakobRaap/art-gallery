import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
const URL = "https://example-apis.vercel.app/api/art";
function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default function App({ Component, pageProps }) {
  const { data = [], isLoading, error } = useSWR(URL, fetcher);

  if (isLoading) return <div>is loading</div>;
  if (error) return <div>error</div>;
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} data={data} />
        <Layout></Layout>
      </SWRConfig>
    </>
  );
}
