
import Newsletter from "./components/newsletter";
import ScheduleSection from "./components/schedules";
import NewsSection from "./components/news";
import OurTeam from "./components/ourTeam";
import Banner from "./components/banner";
import AppointmentForm from "./Components/form/AppointmentForm";
// import Form from "./Components/form/AppointmentForm";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <ScheduleSection></ScheduleSection>
      <NewsSection></NewsSection>
      <OurTeam></OurTeam>
      <AppointmentForm />
      <Newsletter></Newsletter>
    </div>
  );
}