import React from "react";
import { Controller } from "react-hook-form";
import { StepFormProps } from "@/types";
import workLocationsData from "../data/workLocations.json";

const Step2Form: React.FC<StepFormProps> = ({
  control,
  errors,
  handleTabClick,
}) => {
  const workLocations = workLocationsData.workLocations;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Work Locations*
            </label>
            <Controller
              control={control}
              name="preferredWorkLocation"
              render={({ field }) => (
                <div className="space-y-2 mt-2">
                  {workLocations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        value={location}
                        checked={field.value?.includes(location) || false}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(field.value || []), location]
                            : field.value.filter(
                                (item: string) => item !== location,
                              );
                          field.onChange(newValue);
                        }}
                        className="w-4 h-4"
                      />
                      <span>{location}</span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.preferredWorkLocation && (
              <span className="text-red-500 text-xs">
                {errors.preferredWorkLocation.message}
              </span>
            )}
          </div>
        </div>
        <div>
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
        </div>
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
