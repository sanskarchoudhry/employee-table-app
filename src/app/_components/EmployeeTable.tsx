"use client";

import React, { useMemo } from "react";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { Avatar, Box } from "@mui/material";
import { Employee, employeeData } from "@/json-data";

function EmployeeTable() {
  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`, //accessorFn used to join multiple data into a single cell
        id: "name", //id is still required when using accessorFn instead of accessorKey
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Avatar src={row.original.avatar} alt="Avatar" />
            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            <span>{renderedCellValue}</span>
          </Box>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 120,
        Cell: ({ row }) => {
          const status = row.original.status;
          return (
            <span
              className={`
            
              py-1 px-2 rounded-[12px] border capitalize bg-blue-300 border-blue-800 text-blue-800`}
            >
              {status}
            </span>
          );
        },
      },
      { accessorKey: "email", header: "Email", size: 250 },
      { accessorKey: "role", header: "Role", size: 200 },
      {
        accessorKey: "team",
        header: "Teams",
        size: 200,
        Cell: ({ row }) => row.original.team.join(", "),
      },
    ],
    []
  );
  return <MaterialReactTable columns={columns} data={employeeData} />;
}

export default EmployeeTable;
