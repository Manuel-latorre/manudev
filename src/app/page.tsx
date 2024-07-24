import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Experience from '@/components/Experience/Experience';
import Stack from '@/components/Stack/Stack';
import { Metadata } from 'next';
import Form from '@/components/Form/Form';

export const metadata: Metadata = {
  title: "Manuel Latorre | Fullstack Web Developer",
  description: "Desarrollador Web Fullstack",
};

export default function Home() {
  return (
    <div className='flex flex-col gap-36 sm:my-36 my-12' >
      <div id='aboutme'>
        <AboutMe/>
      </div>
      <div id='experience'>
        <Experience/>
      </div>
      <div id='skills'>
        <Stack/>
      </div>
      <div>
        <ContactForWork/>
      </div>

      <div id='contact'>
        <Form/>
      </div>
    </div>
  );
}
