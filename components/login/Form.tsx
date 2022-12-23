import { signIn } from "next-auth/react";
import Input from "../common/Input";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();
  const { t } = useTranslation(["common", "login"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = (data: any) => {
    signIn("credentials", {
      ...data,
      callbackUrl: router.query.callbackUrl || "/",
    });
  };

  return (
    <div className="container mx-auto w-96">
      <form onSubmit={handleSubmit(login)}>
        <Input
          attr={{
            ...register("username", { required: true }),
            type: "text",
          }}
          label={t("username")}
        />
        {errors.username && (
          <span className="text-red-400 inline-block mt-1">
            {errors.username.message}
          </span>
        )}
        <Input
          attr={{
            ...register("password", { required: true }),
            autoComplete: "new-password",
            type: "password",
            placeholder: t("passwordFormat"),
          }}
          label={t("password")}
          className="mt-5"
        />
        {errors.password && (
          <span className="text-red-400 inline-block mt-1">
            {errors.password.message}
          </span>
        )}
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
