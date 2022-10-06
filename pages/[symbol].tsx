import * as React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getPool, getPools } from "../src/service/api";
import { GetStaticPaths } from "next";
import Layout from "../src/components/Layout";

export default function History({ pool }: any) {
  const options = {
    title: {
      text: "Historical TVL - Last 7 days",
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        name: "TVL",
        data: pool.map((item: any) => {
          return [new Date(item.time).valueOf(), item.tvl_in_usd];
        }),
      },
    ],
  };

  return (
    <Layout title="History of Pools" subTitle="Historical TVL - Last 7 days">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pools = await getPools();

  const paths = pools.data.map((pool: any) => ({
    params: {
      symbol: pool.symbol,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const pool = await getPool(context.params.symbol);

  return {
    props: {
      pool: pool.data,
    },
    revalidate: 300,
  };
}
