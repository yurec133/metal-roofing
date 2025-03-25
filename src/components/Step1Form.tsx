import React from "react";
import { Controller } from "react-hook-form";
import { StepFormProps } from "@/types";

const Step1Form: React.FC<StepFormProps> = ({
  control,
  errors,
  handleTabClick,
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Full Name*
        </label>
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.fullName && (
          <span className="text-red-500 text-xs">
            {errors.fullName.message}
          </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Email Address*
        </label>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-7">
        <label className="block text-sm font-medium text-gray-700">
          Phone Number*
        </label>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone.message}</span>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={(e) => handleTabClick(e, 2)}
          type="button"
          className="cursor-pointer bg-blue-600 font-bold text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step1Form;
