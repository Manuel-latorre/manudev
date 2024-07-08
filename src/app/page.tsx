import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Experience from '@/components/Experience/Experience';
import Stack from '@/components/Stack/Stack';



export default function Home() {
  return (
    <div>
        <AboutMe/>
        <Experience/>
        <ContactForWork/>
        <Stack/>
    </div>
  );
}
