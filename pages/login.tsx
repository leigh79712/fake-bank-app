import React from "react";
import Head from "next/head";
import Layout from "../components/Common/Layout";
import Input from "../components/Common/Input";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";

const login = () => {
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
    <Layout>
      <Head>
        <title>Stripe Login | Sign in to the Petit Bank Dashboard</title>
        <meta
          property="og:title"
          content="Stripe Login | Sign in to the Petit Bank Dashboard"
        />
      </Head>
      <div className="container mx-auto w-96">
        <form onSubmit={handleSubmit(mutation.mutate)}>
          <Input
            attr={{
              ...register("username", { required: true }),
              type: "text",
            }}
            label="Username"
          />
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
            className="text-white bg-teal-400 rounded-md h-12 w-full mt-5"
          >
            Create account
          </button>
        </form>
        <p className="text-center mt-5">
          Have an account? <Link href="/login">Sign in</Link>
        </p>
      </div>
    </Layout>
  );
};

export default login;
