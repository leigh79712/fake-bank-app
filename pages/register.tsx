import React from "react";
import Head from "next/head";
import Layout from "../components/Common/Layout";
import Input from "../components/Common/Input";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";

const register = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data: any) => {
    const { data: response } = await axios({
      method: "post",
      url: "/api/user/register",
      data,
    });

    if (response.status === 400) {
      setError("username", {
        type: "server",
        message: response.index,
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto w-96">
        <form onSubmit={handleSubmit(createUser)}>
          <Input
            attr={{
              ...register("username", { required: true }),
              type: "text",
            }}
            label="Username"
          />
          {errors.username && (
            <span className="text-red-400 inline-block mt-1">
              This username already exists.
            </span>
          )}
          <Input
            attr={{
              ...register("password", { required: true }),
              autoComplete: "new-password",
              type: "password",
            }}
            label="Password"
            className="my-5"
          />
          <button
            type="submit"
            className="text-white bg-cyan-500 rounded-md h-12 w-full mt-5"
          >
            Create account
          </button>
        </form>
        <p className="text-center mt-5">
          Have an account?
          <Link href="/login" className="text-cyan-500 ml-1">
            Sign in
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default register;
