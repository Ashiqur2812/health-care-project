
import Banner from "./Components/banner/page";
import Form from "./Components/form/Form";

import OnlineConsult from "./Components/OnlineConsult";

const Home = () => {
    return (
        <div>
          <Banner/>
          <Form/>
       <OnlineConsult/>
    
        </div>
    );
};

export default Home;

import Image from "next/image";
import Newsletter from "./components/newsletter";
import ScheduleSection from "./components/schedules";
import NewsSection from "./components/news";
import OurTeam from "./components/ourTeam";
import Banner from "./components/banner";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner></Banner>
      <ScheduleSection></ScheduleSection>
      <NewsSection></NewsSection>
      <OurTeam></OurTeam>
      <Newsletter></Newsletter>
    </div>
  );
}