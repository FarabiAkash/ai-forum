import AiAcademy from "@/components/Home/AiAcademy";
import Banner from "@/components/Home/Banner";
import CareerCareSection from "@/components/Home/CareerCareSection";
import InnovationSection from "@/components/Home/InnovationSection";
import StayInLoop from "@/components/Home/StayInLoop";


export default function Home() {
  return (
    <>
      <Banner />
      <InnovationSection />
      <CareerCareSection />
      <AiAcademy />
      <StayInLoop />
    </>
  );
}
