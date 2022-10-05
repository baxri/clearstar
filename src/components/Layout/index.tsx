import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Layout({ title, children }: any) {
  return (
    <Container>
      <Box
        sx={{ height: 100 }}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Typography variant="h3">{title}</Typography>
      </Box>
      {children}
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="red">Market Oportunity</Typography>
      </Box>
    </Container>
  );
}
