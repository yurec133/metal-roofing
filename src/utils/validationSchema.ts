import * as Yup from "yup";

export const fullNameValidation = Yup.string()
  .matches(
    /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'’\s-]+$/,
    "Full Name must contain only letters",
  )
  .min(3, "Full Name must be at least 3 characters")
  .max(50, "Full Name cannot exceed 50 characters")
  .required("Full Name is required");

export const emailValidation = Yup.string()
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email format",
  )
  .required("Email is required");

export const phoneValidation = Yup.string()
  .matches(
    /^(?:\+61\s?4\d{2}\s?\d{3}\s?\d{3}|\(?0[2-8]\)?\s?\d{4}\s?\d{4})$/,
    "Invalid phone number format",
  )
  .required("Phone number is required");

export const yearsOfMetalRoofingExperienceValidation = Yup.number()
  .min(0, "Years of experience must be a positive number")
  .required("Years of Metal Roofing Experience is required")
  .integer("Please enter a valid number");

export const roofingLicenseNumberValidation = Yup.string()
  .matches(/^[A-Za-z0-9]+$/, "Roofing License Number must be alphanumeric")
  .min(6, "Roofing License Number must be at least 6 characters")
  .required("Roofing License Number is required");

export const publicLiabilityInsuranceNumberValidation = Yup.string()
    .matches(/^[A-Za-z0-9]+$/, "Public Liability Insurance Number must be alphanumeric")
    .min(6, "Public Liability Insurance Number must be at least 6 characters")
    .required("Public Liability Insurance Number is required");

export const preferredWorkLocationValidation = Yup.string()
    .required("Preferred Work Location is required")
    .notOneOf([""], "Please select a preferred work location");

const positiveNumberValidation = Yup.number()
    .min(0, "Value must be a positive number")
    .required("This field is required");

export const availabilityValidation = Yup.string()
    .required("Availability is required")
    .notOneOf([""], "Please select an availability option");

export const startDateValidation = Yup.date()
    .required("Start date is required")
    .typeError("Please enter a valid date");

export const maxTravelDistanceValidation = Yup.number()
    .min(1, "Distance must be at least 1 km")
    .required("Maximum travel distance is required");

export const schema = Yup.object().shape({
  fullName: fullNameValidation,
  email: emailValidation,
  phone: phoneValidation,
  yearsOfMetalRoofingExperience: yearsOfMetalRoofingExperienceValidation,
  roofingLicenseNumber: roofingLicenseNumberValidation,
  publicLiabilityInsuranceNumber: publicLiabilityInsuranceNumberValidation,
  preferredWorkLocation: preferredWorkLocationValidation,
  tinOnOff: positiveNumberValidation,
  tieDownUpgrades: positiveNumberValidation,
  metalBattens: positiveNumberValidation,
  whirlybird: positiveNumberValidation,
  guttering: positiveNumberValidation,
  availability: availabilityValidation,
  startDate: startDateValidation,
  maxTravelDistance: maxTravelDistanceValidation,
});
