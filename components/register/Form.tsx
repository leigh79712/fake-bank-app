import { useRouter } from "next/router";
import Input from "../common/Input";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

const RegisterForm = () => {
  const router = useRouter();
  const { t } = useTranslation(["common", "register"]);
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data: any) => {
    const { data: res } = await axios({
      method: "post",
      url: "/api/user/register",
      data,
    });

    if (res.status === 400) {
      const type = res.type;
      const message = t(res.message);

      setError(type, {
        type: "server",
        message,
      });
    }

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("username", res.username);
    }

    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto w-96">
      <form onSubmit={handleSubmit(createUser)}>
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
          {t("register")}
        </button>
      </form>
      <p className="text-center mt-5">
        {t("register:hadAccount")}
        <Link href="/login" className="text-cyan-500 ml-1">
          {t("login")}
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
