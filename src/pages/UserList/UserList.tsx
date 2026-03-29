import { DialogNewUser } from "@/components/dialog/DialogNewUser";
import { columns } from "@/components/own/DataTable/Columns";
import { DataTable } from "@/components/own/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import type { ApiResponseList, NewUserData, UserData } from "@/types/types";
import { createNewUser, getListUsers } from "@/utils/fetchUtils";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const UserList = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getList = async () => {
    const response = await getListUsers();
    if (response.ok) {
      const json: ApiResponseList = await response.json();

      const users = json.data.map(({ id, data }) => ({
        ...data,
        userId: id,
      }));
      setData(users);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getList();
    };

    fetchData();
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeResultDialog = () => {
    setIsDialogOpen(false);
  };

  const addNewUser = async (data: NewUserData) => {
    try {
      const response = await createNewUser({ data: data });

      if (response.ok) {
        await getList();
      }
    } catch (error) {
      console.error("Error creating new user:", (error as Error).message);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight self-center">
          Users List
        </h1>
        <Button
          variant="default"
          size="lg"
          className="self-end"
          onClick={openDialog}
        >
          Add new User<PlusIcon></PlusIcon>
        </Button>
        <DataTable columns={columns} data={data}></DataTable>
      </div>

      {/* Dialog New User */}
      <div>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => open && setIsDialogOpen(false)}
        >
          <DialogNewUser
            onClose={closeResultDialog}
            isDialogOpen={isDialogOpen}
            addNewUser={addNewUser}
          ></DialogNewUser>
        </Dialog>
      </div>
    </>
  );
};
