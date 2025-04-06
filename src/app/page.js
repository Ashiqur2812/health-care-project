
import Newsletter from "./components/newsletter";
import ScheduleSection from "./components/schedules";
import NewsSection from "./components/news";
import OurTeam from "./components/ourTeam";
import Banner from "./components/banner";
import Form from "./components/form/Form";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <ScheduleSection></ScheduleSection>
      <NewsSection></NewsSection>
      <OurTeam></OurTeam>
      <Form></Form>
      <Newsletter></Newsletter>
    </div>
  );
}