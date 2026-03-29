import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import type { NewUserData } from "@/types/types";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useEffect } from "react";

type DialogProps = {
  onClose: () => void;
  addNewUser: (data: NewUserData) => void;
  isDialogOpen: boolean;
};

const defaultValues: NewUserData = {
  email: "",
  avatar: "",
  last_name: "",
  first_name: "",
};

export function DialogNewUser({
  onClose,
  addNewUser,
  isDialogOpen,
}: DialogProps) {
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors, isDirty },
    reset: resetForm,
  } = useForm<NewUserData>();

  useEffect(() => {
    if (isDialogOpen) {
      resetForm(defaultValues);
    }
  }, [isDialogOpen, resetForm]);

  const onSubmit = async (data: NewUserData) => {
    addNewUser(data);
    onClose();
  };

  return (
    <DialogContent className="sm:max-w-md" showCloseButton={false}>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold tracking-tight self-center">
          Add new User
        </DialogTitle>
        <DialogDescription className="self-center">
          Fill the form to create a new user
        </DialogDescription>
      </DialogHeader>
      <form
        id="form-actionUser"
        className="p-4 border rounded-md bg-gray-100"
        onSubmit={handleSubmitForm(onSubmit)}
      >
        <div className=" my-8 grid grid-cols-1 justify-items-start gap-y-5">
          <Field>
            <FieldLabel htmlFor="first_name">First Name</FieldLabel>
            <Input
              id="first_name"
              type="text"
              autoComplete="off"
              className={`border ${
                errors.first_name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("first_name", { required: true })}
            ></Input>
          </Field>
          <Field>
            <FieldLabel htmlFor="last_name">Last Name</FieldLabel>
            <Input
              id="last_name"
              type="text"
              autoComplete="off"
              className={`border ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("last_name", { required: true })}
            ></Input>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              autoComplete="off"
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", { required: true })}
            ></Input>
          </Field>
          <Field>
            <FieldLabel htmlFor="avatar">Avatar</FieldLabel>
            <Input
              id="avatar"
              type="url"
              autoComplete="off"
              className={`border ${
                errors.avatar ? "border-red-500" : "border-gray-300"
              }`}
              {...register("avatar", { required: true })}
            ></Input>
          </Field>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onClose}>Cancel</Button>
          </DialogClose>
          <Button
            variant={"outline"}
            form="form-actionUser"
            type="submit"
            disabled={!isDirty}
            className="w-auto"
          >
            Add User
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
