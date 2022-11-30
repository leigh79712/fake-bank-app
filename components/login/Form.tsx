import Input from "../common/Input";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";
import axios from "axios";

const Form = () => {
  const { t } = useTranslation(["common", "login"]);
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient();

  const createUser = async (data: any) => {
    const { data: response } = await axios({
      method: "post",
      url: "/api/user/login",
      data,
    });

    return response.data;
  };

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return (
    <div className="container mx-auto w-96">
      <form onSubmit={handleSubmit(mutation.mutate)}>
        <Input
          attr={{
            ...register("username", { required: true }),
            type: "text",
          }}
          label={t("username")}
        />
        <Input
          attr={{
            ...register("password", { required: true }),
            autoComplete: "new-password",
            type: "password",
          }}
          label={t("password")}
          className="my-5"
        />
        <button
          type="submit"
          className="text-white bg-cyan-500 rounded-md h-12 w-full mt-5"
        >
          {t("login")}
        </button>
      </form>
      <p className="text-center mt-5">
        {t("login:noAccount")}
        <Link href="/register" className="text-cyan-500 ml-1">
          {t("register")}
        </Link>
      </p>
    </div>
  );
};

export default Form;
