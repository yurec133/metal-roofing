"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/validationSchema";
import Step1Form from "@/components/Step1Form";
import StepNavigation from "@/components/StepNavigation";
import Step2Form from "@/components/Step2Form";
import Step3Form from "@/components/Step3Form";

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  yearsOfMetalRoofingExperience: number;
  roofingLicenseNumber: string;
  publicLiabilityInsuranceNumber: string;
  preferredWorkLocation: string;
  tinOnOff: number;
  tieDownUpgrades: number;
  metalBattens: number;
  whirlybird: number;
  guttering: number;
  availability: string;
  startDate: Date;
  maxTravelDistance: number;
}

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [validatedSteps, setValidatedSteps] = useState<number[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      yearsOfMetalRoofingExperience: 0,
      roofingLicenseNumber: "",
      publicLiabilityInsuranceNumber: "",
      preferredWorkLocation: "",
      tinOnOff: 0,
      tieDownUpgrades: 0,
      metalBattens: 0,
      whirlybird: 0,
      guttering: 0,
      availability: "",
      startDate: new Date(),
      maxTravelDistance: 1,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);

    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/22112272/2l08y6g/";

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to Zapier");
      }

      console.log("Data successfully sent to Zapier");
    } catch (error) {
      console.error("Error sending data to Zapier:", error);
    }
  };

  const handleTabClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
    step: number,
  ) => {
    e.preventDefault();

    if (step < currentStep) {
      setCurrentStep(step);
      return;
    }

    let isValid = false;

    if (step === 2) {
      isValid = await trigger(["fullName", "email", "phone"]);
    } else if (step === 3) {
      isValid = await trigger([
        "yearsOfMetalRoofingExperience",
        "roofingLicenseNumber",
        "publicLiabilityInsuranceNumber",
        "preferredWorkLocation",
      ]);
    }

    if (isValid) {
      setCurrentStep(step);
      setValidatedSteps((prev) => [...prev, currentStep]);
    } else {
      console.log("Validation failed");
    }
  };

  return (
    <form
      className="max-w-3xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <StepNavigation
        currentStep={currentStep}
        handleTabClick={handleTabClick}
        validatedSteps={validatedSteps}
      />

      {currentStep === 1 && (
        <Step1Form
          control={control}
          errors={errors}
          handleTabClick={handleTabClick}
        />
      )}

      {currentStep === 2 && (
        <Step2Form
          control={control}
          errors={errors}
          handleTabClick={handleTabClick}
        />
      )}

      {currentStep === 3 && (
        <Step3Form
          control={control}
          errors={errors}
          handleTabClick={handleTabClick}
          handleSubmit={handleSubmit(onSubmit)}
        />
      )}
    </form>
  );
};

export default MultiStepForm;
