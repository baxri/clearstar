import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Layout({ title, subTitle, children }: any) {
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
      <Typography variant="caption" color="textSecondary">
        {subTitle}
      </Typography>
      {children}
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="red">Market Oportunity</Typography>
      </Box>
    </Container>
  );
}
