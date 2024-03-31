"use client";
import React, { useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "../../../services/axiosreq";
import { Checkbox } from "@/components/ui/checkbox";

// import { FormField } from "@/types/signupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import Image from "next/image";
import { z } from "zod";
const page = () => {
  const [accessToken, setAccessToken] = useState("");
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    isBusiness: z.boolean(),
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
    console.log("data", data);
    try {
      signup({
        name: data.name,
        email: data.email,
        password: data.password,
        isBusiness: data.isBusiness,
      })
        .then((res) => {
          console.log(res);

          const accessToken = res.tokens.access.token;
          // Set the access token in a cookie
          setCookie(null, "accessToken", accessToken, {
            maxAge: 60 * 60 * 24, // 1 day in seconds
            path: "/",
          });

          // Update the state with the access token
          setAccessToken(accessToken);

          console.log("accessToken", accessToken);
        })
        .catch((err) => {
          console.log(err);
        });
      // throw new Error('Something went wrong');
    } catch (err) {
      setError("email", {
        message: "This email is already taken",
      });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-2/5 flex gap-2 h-screen justify-center">
        <div></div>
        <div className="flex flex-col justify-around h-screen py-4 items-center">
          <Image
            src="/Logo.png"
            className="bg-white"
            width={200}
            height={50}
            alt="logo"
          />
          <div></div>
          <Card className="w-[25rem]  border-1  flex flex-col justify-center ">
            <CardHeader className="flex ">
              <CardTitle className="mb-1">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action=""
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}

                <Input
                  {...register("password", { required: true, minLength: 8 })}
                  type="password"
                  placeholder="password"
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}

                <Input
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                  })}
                  type="password"
                  placeholder="repeat Password"
                />
                {errors.confirmPassword && (
                  <div className="text-red-500">
                    {errors.confirmPassword.message}
                  </div>
                )}

                <div className="flex gap-3">
                  <input
                    {...register("isBusiness", { required: true })}
                    type="checkbox"
                    id="isBusiness" // added id attribute
                  />
                  <label htmlFor="isBusiness">For Business</label>
                </div>
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Loading" : "Submit"}
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
              <div className="flex pt-2 justify-center">
                Already have an Account?{" "}
                <span className="text-pink-600 mx-2"> Sign In</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div></div>
      </div>
      <div className="relative ">
        <Image
          src="/Rectangle.png"
          alt="rectangle"
          width={650}
          height={650}
          className=" bg-blend-overlay "
        />
      </div>
    </div>
  );
};

export default page;
