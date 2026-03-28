import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import type { UserData, ApiResponse } from "../types/types";

export const Main = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://reqres.in/api/collections/users/records?project_id=${import.meta.env.VITE_PROJECT_ID}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
      );
      const json: ApiResponse = await response.json();
      const clearData = json.data.map(({ data }) => data);
      setData(clearData);
    };

    fetchData();
  }, []);

  // Create colums to table
  const columns = [
    {
      accessorKey: "first_name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "avatar",
      header: "Avatar",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  //   return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <div className="bg-gradient">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINACIÓN */}
      <button onClick={() => table.previousPage()}>Anterior</button>
      <button onClick={() => table.nextPage()}>Siguiente</button>
    </div>
  );
};
