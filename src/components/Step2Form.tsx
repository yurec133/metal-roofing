import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from "@/components/MultiStepForm";

type Step2FormProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  handleTabClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    step: number,
  ) => void;
};

const workLocations = [
  "Queensland - South East",
  "Queensland - Fraser Coast",
  "Queensland - Northern",
  "Queensland - Rural",
  "Queensland - Willing to Travel Anywhere",
  "New South Wales - Sydney Area",
  "New South Wales - Central Coast",
  "New South Wales - Northern",
  "New South Wales - Rural",
  "New South Wales - Willing to Travel Anywhere",
  "Victoria",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Northern Territory",
  "Australian Capital Territory",
];

const Step2Form: React.FC<Step2FormProps> = ({
  control,
  errors,
  handleTabClick,
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Years of Metal Roofing Experience*
        </label>
        <Controller
          control={control}
          name="yearsOfMetalRoofingExperience"
          render={({ field }) => (
            <input
              {...field}
              type="number"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.yearsOfMetalRoofingExperience && (
          <span className="text-red-500 text-xs">
            {errors.yearsOfMetalRoofingExperience.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Preferred Work Location*
        </label>
        <Controller
          control={control}
          name="preferredWorkLocation"
          rules={{ required: "Preferred Work Location is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a region</option>
              {workLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          )}
        />
        {errors.preferredWorkLocation && (
          <span className="text-red-500 text-xs">
            {errors.preferredWorkLocation.message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Roofing License Number*
        </label>
        <Controller
          control={control}
          name="roofingLicenseNumber"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.roofingLicenseNumber && (
          <span className="text-red-500 text-xs">
            {errors.roofingLicenseNumber.message}
          </span>
        )}
      </div>

      <div className="mb-7">
        <label className="block text-sm font-medium text-gray-700">
          Public Liability Insurance Number*
        </label>
        <Controller
          control={control}
          name="publicLiabilityInsuranceNumber"
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
            />
          )}
        />
        {errors.publicLiabilityInsuranceNumber && (
          <span className="text-red-500 text-xs">
            {errors.publicLiabilityInsuranceNumber.message}
          </span>
        )}
      </div>

      <div className="flex justify-between gap-2">
        <button
          onClick={(e) => handleTabClick(e, 1)}
          className="cursor-pointer bg-gray-300 font-bold text-sm text-gray-700 px-4 py-2 rounded-lg
                hover:bg-gray-400 transition-colors
                shadow-md hover:shadow-lg"
        >
          Previous
        </button>
        <button
          onClick={(e) => handleTabClick(e, 3)}
          className="cursor-pointer bg-blue-600 font-bold text-sm text-white px-4 py-2 rounded-lg
                hover:bg-blue-700 transition-colors
                shadow-md hover:shadow-lg"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step2Form;
