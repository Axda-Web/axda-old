"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "react-query";
import Image from "next/image";

  const formDataSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(20).max(200),
});

  type FormData = z.infer<typeof formDataSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formDataSchema) });

  const { mutate, isLoading } = useMutation((formData: FormData) =>
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  );

  const onSubmit = async (data: FormData) => {
    try {
      await mutate(data);
      reset();
      alert("Your message has been sent!");
    } catch (error) {
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 grow   " noValidate>
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="TEXT"
            aria-invalid={errors?.name ? "true" : "false"}
            {...register("name")}
            className={`bg-transparent text-white border-b border-b-white text-base p-4 block w-full placeholder:text-gray-500 ${
              !errors.name ? "border-b-secondary" : "border-b-red-400"
            }`}
          />
          {errors?.name && (
            <Image
              src="/icons/warning.svg"
              width={24}
              height={24}
              alt="warning icon"
              className="absolute right-0 top-5"
            />
          )}
        </div>
        {errors?.name && (
          <p
            className="text-xs text-red-400 text-right font-medium mt-1.5"
            role="alert"
          >
            {errors?.name?.message}
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <input
            type="email"
            placeholder="EMAIL"
            aria-invalid={errors?.email ? "true" : "false"}
            {...register("email")}
            className={`bg-transparent text-white border-b border-b-white text-base p-4 block w-full placeholder:text-gray-500 ${
              !errors.email ? "border-b-secondary" : "border-b-red-400"
            }`}
          />
          {errors?.email && (
            <Image
              src="/icons/warning.svg"
              width={24}
              height={24}
              alt="warning icon"
              className="absolute right-0 top-5"
            />
          )}
        </div>
        {errors?.email && (
          <p
            role="alert"
            className="text-xs text-red-400 text-right font-medium mt-1.5"
          >
            {errors?.email?.message}
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <textarea
            rows={4}
            placeholder="MESSAGE"
            aria-invalid={errors?.name ? "true" : "false"}
            {...register("message")}
            className={`bg-transparent text-white border-b border-b-white text-base p-4 block w-full placeholder:text-gray-500 ${
              !errors.message ? "border-b-secondary" : "border-b-red-400"
            }`}
          />
          {errors?.message && (
            <Image
              src="/icons/warning.svg"
              width={24}
              height={24}
              alt="warning icon"
              className="absolute right-0 top-5"
            />
          )}
        </div>
        {errors?.message && (
          <p
            className="text-xs text-red-400 text-right font-medium mt-1.5"
            role="alert"
          >
            {errors.message?.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="uppercase border-b-2 border-secondary pb-2.5 font-bold hover:text-secondary transition-colors duration-300 float-right"
      >
        {isLoading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default Form;
