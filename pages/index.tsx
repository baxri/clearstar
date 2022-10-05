import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { actionColumn } from "../src/components/Table/actionColumn";
import { getPools } from "../src/service/api";

export default function Index({ pools }: any) {
  const router = useRouter();

  const columns = [
    actionColumn((item: any) => {
      router.push({
        pathname: "/[id]",
        query: { id: item.symbol },
      });
    }),
    {
      field: "symbol",
      headerName: "Pool",
      width: 150,
      editable: false,
    },
    {
      field: "d_apr",
      headerName: "APR 1D",
      width: 150,
      editable: false,
      valueGetter: (params: any) => toPercentage(params.row.d_apr),
    },
    {
      field: "w_apr",
      headerName: "APR 1W",
      width: 150,
      editable: false,
      valueGetter: (params: any) => toPercentage(params.row.w_apr),
    },
    {
      field: "m_apr",
      headerName: "APR 1M",
      width: 150,
      editable: false,
      valueGetter: (params: any) => toPercentage(params.row.m_apr),
    },
    {
      field: "tvl",
      headerName: "TVL",
      width: 200,
      editable: false,
    },
    {
      field: "last_updated",
      headerName: "Last update",
      width: 160,
      valueGetter: (params: any) =>
        new Date(params.row.last_updated).toLocaleDateString(),
    },
  ];

  return (
    <Container>
      <Box
        sx={{ height: 100 }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Typography variant="h3">Pools</Typography>
      </Box>
      <Box sx={{ height: 400 }}>
        <DataGrid
          getRowId={(item) => item.symbol}
          disableSelectionOnClick
          disableColumnSelector
          rows={pools}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const pools = await getPools();

  return {
    props: {
      pools: pools.data,
    },
    revalidate: 300,
  };
}

function toPercentage(val: number) {
  return `${(val * 100).toFixed(2)}%`;
}
