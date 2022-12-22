import { useQuery } from "@tanstack/react-query";
import Input from "../common/Input";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserForm = () => {
  const { t } = useTranslation(["common", "login"]);
  const { register, handleSubmit } = useForm();

  const getUser = async () => {
    const { data } = await axios({
      method: "get",
      url: "/api/auth/getUser",
    });

    return data.user;
  };

  const setUserData = (data: any) => {
    // axios({
    //   method: "post",
    //   url: `/api/auth/editUser`,
    //   data: {
    //     ...data,
    //   },
    // });
  };

  const { isLoading, data } = useQuery(["user"], getUser);

  if (isLoading) return <p>is Loading</p>;

  return (
    <form onSubmit={handleSubmit(setUserData)}>
      <Input
        attr={{ ...register("firstname"), type: "text" }}
        label={t("firstname")}
        value={data.firstname}
      />
      <Input
        attr={{ ...register("lastname"), type: "text" }}
        label={t("lastname")}
        className="mt-5"
        value={data.lastname}
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
  );
};

export default UserForm;
