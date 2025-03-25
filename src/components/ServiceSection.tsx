import { ChevronDown } from "lucide-react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormData } from "@/types";
import { useState } from "react";
import { ServiceItem } from "@/types";

type ServiceSectionProps = {
  title: string;
  services: ServiceItem[];
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  services,
  control,
  errors,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  return (
    <div className="mb-4 border border-gray-300 rounded-lg">
      <button
        type="button"
        className="cursor-pointer flex font-bold items-center justify-between w-full px-2 py-3 text-left"
        onClick={() => toggleSection(title)}
      >
        <span className="font-bold text-blue-900 text-sm pr-4 pl-2">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-blue-900 transform transition-transform ${openSections[title] ? "rotate-180" : ""}`}
        />
      </button>
      {openSections[title] && (
        <div className="p-4">
          {services.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <Controller
                control={control}
                name={field.name as keyof FormData}
                render={({ field }) => {
                  const value = field.value;
                  const inputValue =
                    value instanceof Date
                      ? value.toISOString().split("T")[0]
                      : value;

                  return (
                    <input
                      {...field}
                      type="number"
                      step="0.01"
                      className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                      placeholder="$"
                      value={inputValue === 0 ? "" : inputValue}
                    />
                  );
                }}
              />
              {errors[field.name as keyof FormData] && (
                <span className="text-red-500 text-xs">
                  {errors[field.name as keyof FormData]?.message}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ServiceSection;
