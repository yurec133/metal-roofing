import React from "react";
import { Controller } from "react-hook-form";
import servicesData from "../data/services.json";
import ServiceSection from "@/components/ServiceSection";
import { ServicesDataType, StepFormProps } from "@/types";

const Step3Form: React.FC<StepFormProps> = ({
  control,
  errors,
  handleTabClick,
  handleSubmit,
}) => {
  const { supplyAndInstallServices, laborOnlyServices } =
    servicesData as ServicesDataType;

  const serviceCategories = [
    {
      title: "Supply & Install",
      services: supplyAndInstallServices,
    },
    {
      title: "Labor Only",
      services: laborOnlyServices,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        <div>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Availability*
            </label>
            <Controller
              control={control}
              name="availability"
              rules={{ required: "Availability is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-2 w-full p-2.5 border border-gray-300 rounded-md"
                >
                  <option value="">Select availability</option>
                  <option value="immediately">Immediately</option>
                  <option value="1week">Within 1 week</option>
                  <option value="2weeks">Within 2 weeks</option>
                  <option value="1month">Within 1 month</option>
                </select>
              )}
            />
            {errors.availability && (
              <span className="text-red-500 text-xs">
                {errors.availability.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              When can you start?*
            </label>
            <Controller
              control={control}
              name="startDate"
              rules={{ required: "Start date is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  value={
                    field.value
                      ? new Date(field.value).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => field.onChange(new Date(e.target.value))}
                />
              )}
            />
            {errors.startDate && (
              <span className="text-red-500 text-xs">
                {errors.startDate.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              What town are you based in?*
            </label>
            <Controller
              control={control}
              name="town"
              rules={{ required: "Town is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your town"
                />
              )}
            />
            {errors.town && (
              <span className="text-red-500 text-xs">
                {errors.town.message}
              </span>
            )}
          </div>
          <div className={"mb-4"}>
            <label className="block text-sm font-medium text-gray-700">
              Maximum Travel Distance (km)*
            </label>
            <Controller
              control={control}
              name="maxTravelDistance"
              rules={{ required: "Maximum travel distance is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter distance in km"
                />
              )}
            />
            {errors.maxTravelDistance && (
              <span className="text-red-500 text-xs">
                {errors.maxTravelDistance.message}
              </span>
            )}
          </div>
          {serviceCategories.map(({ title, services }) => (
            <ServiceSection
              key={title}
              title={title}
              services={services}
              control={control}
              errors={errors}
            />
          ))}
        </div>
        <div>
          <div className="bg-red-100 px-5 py-8 rounded-lg border-2 border-red-500 text-red-500 sticky top-5">
            <h3 className={"text-center font-bold text-xl mb-2"}>
              🚨 WARNING! 🚨
            </h3>
            <p className={"mb-2"}>
              📢 The more competitive your rates, the higher your chances of
              being selected for regular insurance work.
            </p>
            <p>
              📢 Our insurance builders prioritize roofers who offer fair,
              market-competitive pricing. Make sure your rates give you the best
              shot at getting steady jobs!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button
          onClick={(e) => handleTabClick(e, 2)}
          className="cursor-pointer bg-gray-300 font-bold text-sm text-gray-700 px-4 py-2 rounded-lg
                hover:bg-gray-400 transition-colors
                shadow-md hover:shadow-lg"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
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

export default Step3Form;
