"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/validationSchema";
import Step1Form from "@/components/Step1Form";
import StepNavigation from "@/components/StepNavigation";
import Step2Form from "@/components/Step2Form";
import Step3Form from "@/components/Step3Form";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/Modal";
import Image from "next/image";
import { FormData } from "@/types";

const MultiStepForm = () => {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [validatedSteps, setValidatedSteps] = useState<number[]>([]);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
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
      preferredWorkLocation: [],
      tinOnOff: 0,
      tieDownUpgrades: 0,
      metalBattens: 0,
      whirlybird: 0,
      guttering: 0,
      availability: "",
      startDate: new Date(),
      maxTravelDistance: 1,
      town: "",
      anticonBlanket: 0,
      sarking: 0,
      dektites: 0,
      skylightDome: 0,
      customFlashings: 0,
      newGuttering: 0,
      gutterGuards: 0,
      removeRoof: 0,
      installBattens: 0,
      installInsulation: 0,
      installWhirlybirds: 0,
      installDektites: 0,
      installGutters: 0,
      installGutterGuards: 0,
      installFlashings: 0,
      reinstallAntenna: 0,
      rubbishRemoval: 0,
      installTieDowns: 0,
      guardRail: 0
    },
  });
  const resetFormAndOpenModal = () => {
    setCurrentStep(1);
    setValidatedSteps([]);
    reset();
    openModal();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const zapierWebhookUrl =
      "https://hooks.zapier.com/hooks/catch/4521522/2et212u/";

    try {
      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to Zapier");
      }
      resetFormAndOpenModal();
      console.log("Data successfully sent to Zapier Front");
    } catch (error) {
      setAlert({
        message: "Error sending data to Zapier. Please try again.",
        type: "error",
      });
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

  const closeAlert = () => {
    setAlert({
      message: "",
      type: null,
    });
  };

  return (
    <>
      {alert.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-8 mb-4 rounded-md ${
            alert.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <div className="flex justify-between items-center">
            <span>{alert.message}</span>
            <button
              onClick={closeAlert}
              className="cursor-pointer absolute right-[10px] top-[2px] text-2xl font-bold text-gray-700 hover:text-gray-500"
              aria-label="Close alert"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2 className="px-5 text-lg text-center md:text-2xl font-bold uppercase text-blue-500 mb-4">
          We cannot guarantee that you'll be accepted into the group.
        </h2>
        <Image
          src={"/images/australian-metal-roofing.webp"}
          alt="Metal Roofing"
          width={1024}
          height={1024}
          className="w-full h-auto"
          placeholder="blur"
          priority
        />
      </Modal>
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
    </>
  );
};

export default MultiStepForm;
