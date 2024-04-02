"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/services/axiosreq";
import Image from "next/image";

const page = () => {
  const [invalid, setInvalid] = useState();
  const [accessToken, setAccessToken] = useState("");
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  type FormField = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormField> = async (data: FormField) => {
    try {
      console.log("this is form data", data);
      login(data)
        .then((res) => {
          console.log("success", res);
          localStorage.setItem("accessToken", res.tokens.access.token);
        })
        .catch((error) => {
          console.log("error", error);
          setInvalid(error.message);
        });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="flex flex-col justify-around h-screen py-4 items-center">
      <div>
        <Image src="/Logo.png" alt="logo" width={200} height={100} />
      </div>
      <div className="">
        <Card className="w-[36.625rem] h-[30rem] border-1 shadow-xl flex flex-col items-center justify-center ">
          <CardHeader className="flex justify-center">
            <CardTitle className="mb-4">Log In</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action=""
              className="flex flex-col gap-5 w-[20rem]"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              {invalid ? (
                <div className="text-red-500">
                  {" "}
                  Incorrect Username or Password{" "}
                </div>
              ) : (
                ""
              )}
              <Input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <Input
                {...register("password", { required: true, minLength: 8 })}
                type="password"
                placeholder="password"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
              <Button disabled={isSubmitting} type="submit">
                {isSubmitting ? "Loading" : "Login"}
              </Button>

              <div className="text-blue-600 font-semibold flex justify-center">
                Forgot Password?
              </div>
              <div className="flex items-center gap-5">
                <div className="flex-grow border-b-2"></div>
                <div className="text-slate-400">or</div>
                <div className="flex-grow border-b-2  "></div>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Facebook</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div>Dont have an account</div>
    </div>
  );
};

export default page;
