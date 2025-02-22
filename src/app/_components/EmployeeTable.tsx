"use client";
import React, { useMemo, useState } from "react";
import { MaterialReactTable, MRT_ColumnDef } from "material-react-table";
import { Avatar, Box } from "@mui/material";
import { Employee, employeeData } from "@/json-data";

function EmployeeTable() {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleExpand = (id: string) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const columns = useMemo<MRT_ColumnDef<Employee>[]>(
    () => [
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: "name",
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Avatar src={row.original.avatar} alt="Avatar" />
            <Box>
              <span className="font-medium text-gray-900">
                {renderedCellValue}
              </span>
              <br />
              <span className="text-sm text-gray-500">
                @{row.original.username}
              </span>
            </Box>
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
              className={`py-1 px-2 rounded-[12px] border capitalize text-white ${
                status === "working"
                  ? "bg-blue-500 border-blue-800"
                  : "bg-red-400 border-red-700"
              }`}
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
        Cell: ({ row }) => {
          const teams = row.original.team;
          const isExpanded = expandedRows[row.id]; // Track expanded state

          return (
            <Box display="flex" alignItems="center">
              <div
                className="flex gap-1 items-center"
                onClick={() => toggleExpand(row.id)}
              >
                {(isExpanded ? teams : teams.slice(0, 3)).map((team, index) => {
                  // Define a color intensity based on index
                  const shade = 75 + index * 30; // Darkens with each entry

                  return (
                    <span
                      key={index}
                      className="py-1 px-2 rounded-[12px] border capitalize text-white"
                      style={{
                        backgroundColor: `rgb(59, 130, 246, ${shade / 100})`, // RGBA with increasing opacity
                        borderColor: "rgb(37, 99, 235)", // Blue-600 border
                      }}
                    >
                      {team}
                    </span>
                  );
                })}
                {!isExpanded && teams.length > 3 && (
                  <span className="py-1 px-2 bg-slate-200 rounded-[25px] cursor-pointer">
                    +{teams.length - 3}
                  </span>
                )}
              </div>
            </Box>
          );
        },
      },
    ],
    [expandedRows]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={employeeData}
      enableRowSelection
    />
  );
}

export default EmployeeTable;
