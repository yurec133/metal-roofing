import JobSection from "@/components/JobSection";
import JoinUsSection from "@/components/JoinUsSection";
import GoodFitSection from "@/components/GoodFitSection";
import GetStartedSection from "@/components/GetStartedSection";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";
import RoofingJobAppSection from "@/components/RoofingJobAppSection";

export default function Home() {
  return (
    <>
      <JobSection />
      <JoinUsSection />
      <GoodFitSection />
      <GetStartedSection />
      <RoofingJobAppSection />
      <QuestionSection />
      <Footer />
    </>
  );
}
