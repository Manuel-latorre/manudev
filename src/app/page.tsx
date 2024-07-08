import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';


export default function Home() {
  return (
    <div>
      <AboutMe/>
      <Experience/>
      <ContactForWork/>
      <Projects/>
    </div>
  );
}
