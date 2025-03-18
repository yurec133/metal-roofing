import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from "@/components/MultiStepForm";

type Step3FormProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  handleTabClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    step: number,
  ) => void;
  handleSubmit: () => void;
};

const Step3Form: React.FC<Step3FormProps> = ({
  control,
  errors,
  handleTabClick,
  handleSubmit,
}) => {
  return (
    <>
      {[
        {
          name: "tinOnOff",
          label:
            "Tin On/Off (All flashings, capping, sheets, fixings, valleys, cleaning gutter and site) (per m²)",
        },
        { name: "tieDownUpgrades", label: "Tie-Down Upgrades (per m²)" },
        { name: "metalBattens", label: "Metal Battens (per m²)" },
        { name: "whirlybird", label: "Whirlybird (per unit)" },
        { name: "guttering", label: "Guttering (per lm)" },
      ].map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <Controller
            control={control}
            name={field.name as keyof FormData}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                placeholder="$"
                value={field.value as number}
              />
            )}
          />
          {errors[field.name as keyof FormData] && (
            <span className="text-red-500 text-xs">
              {errors[field.name as keyof FormData]?.message}
            </span>
          )}
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Availability*
        </label>
        <Controller
          control={control}
          name="availability"
          rules={{ required: "Availability is required" }}
          render={({ field }) => (
            <select
              {...field}
              className="mt-2 w-full p-2 border border-gray-300 rounded-md"
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

      <div className="mb-7">
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
