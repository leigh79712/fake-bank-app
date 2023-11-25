import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Input from "../common/Input";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserForm = () => {
  const { t } = useTranslation(["common", "login"]);
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const getUser = async () => {
    const { data } = await axios({
      method: "get",
      url: "/api/auth/getUser",
    });

    return data.user;
  };

  const editUser = async (data: any) => {
    await axios({
      method: "post",
      url: `/api/auth/editUser`,
      data: {
        ...data,
      },
    });
  };

  const { isLoading, data } = useQuery(["user"], getUser);

  const mutation = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  if (isLoading) return <p>is Loading</p>;

  return (
    <div className="container mx-auto w-96">
      <form onSubmit={handleSubmit(mutation.mutate)}>
        <Input
          attr={{ ...register("firstName"), type: "text" }}
          label={t("firstName")}
          value={data.firstName}
        />
        <Input
          attr={{ ...register("lastName"), type: "text" }}
          label={t("lastName")}
          className="mt-5"
          value={data.lastName}
        />
        <Input
          attr={{ ...register("email"), type: "email" }}
          label={t("email")}
          className="mt-5"
          value={data.email}
        />
        <button
          type="submit"
          className="text-white bg-cyan-500 rounded-md h-12 w-full mt-5"
        >
          {t("confirm")}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
