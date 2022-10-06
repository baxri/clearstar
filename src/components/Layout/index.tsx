import { Box, Container, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import React from "react";

export default function Layout({ title, subTitle, children }: any) {
  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">Market Oportunity</Typography>
      </Box>
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
        Created with {` `}{" "}
        <Favorite sx={{ margin: "0 5px 0 5px" }} color="error" /> {` `} by
        George
      </Box>
    </Container>
  );
}
