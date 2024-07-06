import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Projects from '@/components/Projects/Projects';
import { ExperienceBentoDemo } from '@/components/Experience/ExperienceBentoGrid';


export default function Home() {
  return (
    <div>
      <AboutMe/>
      <ExperienceBentoDemo/>
      <ContactForWork/>
      <Projects/>
    </div>
  );
}
