import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import Experience from '@/components/Experience/Experience';
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Projects from '@/components/Projects/Projects';


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
