import JobSection from "@/components/JobSection";
import JoinUsSection from "@/components/JoinUsSection";
import GoodFitSection from "@/components/GoodFitSection";
import GetStartedSection from "@/components/GetStartedSection";
import QuestionSection from "@/components/QuestionSection";
import Footer from "@/components/Footer";
import RoofingJobAppSection from "@/components/RoofingJobAppSection";
import { ScrollProvider } from "@/context/scrollContext";

export default function Home() {
  return (
    <>
      <ScrollProvider>
        <JobSection />
        <JoinUsSection />
        <GoodFitSection />
        <GetStartedSection />
        <RoofingJobAppSection />
      </ScrollProvider>
      <QuestionSection />
      <Footer />
    </>
  );
}
