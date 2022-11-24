import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { Banner, Feature, Operation, JoinToday } from "components/HomeBody";

const Index = ({ loggedIn, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = async (data) => {
    const { data: response } = await axios({
      method: "post",
      url: "/api/user/register",
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
    <main>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))}>
        <input {...register("username", { required: true })} />
        {errors.username && <p>username is required.</p>}
        <input
          {...register("password", { required: true })}
          type="password"
          autoComplete="new-password"
        />
        {errors.password && <p>password is required.</p>}
        <input type="submit" />
      </form>
    </main>
  );
};

export default Index;
