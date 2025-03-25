import { Control, FieldErrors } from "react-hook-form";
import React from "react";

export type StepFormProps = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  handleTabClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    step: number,
  ) => void;
  handleSubmit?: () => void;
};
export type ServiceItem = {
  name: string;
  label: string;
};
export type ServicesDataType = {
  roofingServices: ServiceItem[];
  supplyAndInstallServices: ServiceItem[];
  laborOnlyServices: ServiceItem[];
  additionalServices: ServiceItem[];
};
export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  yearsOfMetalRoofingExperience: number;
  roofingLicenseNumber: string;
  publicLiabilityInsuranceNumber: string;
  preferredWorkLocation: string[];
  tinOnOff: number;
  tieDownUpgrades: number;
  metalBattens: number;
  whirlybird: number;
  guttering: number;
  availability: string;
  startDate: Date;
  maxTravelDistance: number;
  town: string;
  anticonBlanket: number;
  sarking: number;
  dektites: number;
  skylightDome: number;
  customFlashings: number;
  newGuttering: number;
  gutterGuards: number;
  removeRoof: number;
  installBattens: number;
  installInsulation: number;
  installWhirlybirds: number;
  installDektites: number;
  installGutters: number;
  installGutterGuards: number;
  installFlashings: number;
  reinstallAntenna: number;
  installTieDowns: number;
  rubbishRemoval: number;
  guardRail: number;
}