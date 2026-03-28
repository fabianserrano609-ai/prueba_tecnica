import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import type { ApiItem, UserData } from "@/types/types";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const userId = useParams();
  const [dataUser, setDataUser] = useState<UserData>();
  const urlRandomImage = "https://i.pravatar.cc/150?img=";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://reqres.in/api/collections/users/records/${userId}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
      );
      const json: ApiItem = await response.json();

      setDataUser(json.data);
    };

    fetchData();
  }, [userId]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-6">
      <Breadcrumb className="flex flex-row">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
                <AvatarImage src={urlRandomImage + userId} alt="avatar" />
                <AvatarFallback>{dataUser.first_name}</AvatarFallback>
              </Avatar>
            </ItemMedia>
          </Item>
          <Button variant="default" className="self-center">
            Edit User <Pencil></Pencil>
          </Button>
        </div>
      ) : (
        <div className="text-2xl self-center p-3">
          <h2>Not have data for this User!!</h2>
        </div>
      )}
    </div>
  );
};
