import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { UserData } from "@/types/types";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "data_first_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const userId = row.original.userId;
      return (
        <NavLink to={`/details/${userId}`}>
          {row.getValue("first_name")}
        </NavLink>
      );
    },
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const userId = row.original.userId;
      const urlRandomImage = "https://i.pravatar.cc/150?img=";

      return (
        <Avatar>
          <AvatarImage src={urlRandomImage + userId} alt="avatar" />
          <AvatarFallback>{row.getValue("first_name")}</AvatarFallback>
        </Avatar>
      );
    },
  },
];
