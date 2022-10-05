import { Search } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { GridValidRowModel } from "@mui/x-data-grid";
import Link from "next/link";

export function actionColumn<T extends GridValidRowModel>() {
  return {
    sortable: false,
    flex: 0,
    field: "view_details",
    headerName: "",
    disableColumnMenu: true,
    disableReorder: true,
    disableExport: true,
    minWidth: 50,
    maxWidth: 50,
    renderCell: ({ row }: any) => (
      <Tooltip title="Show Details">
        <Link href={`/${row.symbol}`}>
          <IconButton>
            <Search color="secondary" fontSize="inherit" />
          </IconButton>
        </Link>
      </Tooltip>
    ),
  };
}
