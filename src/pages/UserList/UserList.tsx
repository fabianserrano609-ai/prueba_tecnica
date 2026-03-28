import { columns } from "@/components/own/DataTable/Columns";
import { DataTable } from "@/components/own/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import type { ApiResponse, UserData } from "@/types/types";
import { PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export const UserList = () => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://reqres.in/api/collections/users/records`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
      );
      const json: ApiResponse = await response.json();

      const users = json.data.map(({ id, data }) => ({
        ...data,
        userId: id,
      }));
      setData(users);
    };

    fetchData();
  }, []);
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-1">
      <h1 className="text-3xl font-bold tracking-tight self-center">
        Users List
      </h1>
      <Button variant="default" size="lg" className="self-end">
        Add new User<PlusIcon></PlusIcon>
      </Button>
      <DataTable columns={columns} data={data}></DataTable>
    </div>
  );
};
