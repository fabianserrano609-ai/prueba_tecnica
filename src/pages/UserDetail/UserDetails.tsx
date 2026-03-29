import { DialogEditUser } from "@/components/dialog/DialogEditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import type { ApiResponseItem, NewUserData, UserData } from "@/types/types";
import { editUserData, getDataUser } from "@/utils/fetchUtils";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams();
  const [dataUser, setDataUser] = useState<UserData>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchUserData = async () => {
    if (id) {
      const response = await getDataUser(id);

      const json: ApiResponseItem = await response.json();

      setDataUser(json.data.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserData();
    };
    fetchData();
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeResultDialog = () => {
    setIsDialogOpen(false);
  };

  const editUser = async (data: UserData) => {
    if (id) {
      try {
        const response = await editUserData(id, {
          data: data as NewUserData,
        });

        if (response.ok) {
          await fetchUserData();
        }
      } catch (error) {
        console.error("Error updating user:", (error as Error).message);
      }
    }
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-6">
        <Breadcrumb className="flex flex-row">
          <BreadcrumbList>
            <BreadcrumbItem>
              <NavLink to={`/`}>Home</NavLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>User Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold tracking-tight self-center">
          User Details
        </h1>
        {dataUser ? (
          <div className="flex flex-col w-full max-w-md gap-6 self-center">
            <Item variant="muted">
              <ItemTitle>First Name</ItemTitle>
              <ItemContent>{dataUser.first_name}</ItemContent>
            </Item>
            <Item variant="muted">
              <ItemTitle>Last Name</ItemTitle>
              <ItemContent>{dataUser.last_name}</ItemContent>
            </Item>
            <Item variant="muted">
              <ItemTitle>Email</ItemTitle>
              <ItemContent>{dataUser.email}</ItemContent>
            </Item>
            <Item variant="muted">
              <ItemTitle>Avatar</ItemTitle>
              <ItemMedia>
                <Avatar>
                  <AvatarImage src={dataUser.avatar} alt="avatar" />
                  <AvatarFallback>{dataUser.first_name}</AvatarFallback>
                </Avatar>
              </ItemMedia>
            </Item>
            <Button
              variant="default"
              className="self-center"
              onClick={openDialog}
            >
              Edit User <Pencil></Pencil>
            </Button>
          </div>
        ) : (
          <div className="text-2xl self-center p-3">
            <h2>Not have data for this User!!</h2>
          </div>
        )}
      </div>

      {/* Dialog Edit User */}
      <div>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => open && setIsDialogOpen(false)}
        >
          <DialogEditUser
            onClose={closeResultDialog}
            isDialogOpen={isDialogOpen}
            editUser={editUser}
            dataUser={dataUser}
          ></DialogEditUser>
        </Dialog>
      </div>
    </>
  );
};
