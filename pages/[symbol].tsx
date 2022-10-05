import * as React from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { getPool, getPools } from "../src/service/api";
import { GetStaticPaths } from "next";

export default function History({ pool }: any) {
  const options = {
    title: {
      text: "historical TVL - Last 7 days",
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
    <Container>
      <Box
        sx={{ height: 100 }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Typography variant="h3">History of Pools</Typography>
      </Box>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Container>
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