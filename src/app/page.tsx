import AboutMe from '@/components/AboutMe/AboutMe';
import './globals.css'
import ContactForWork from '@/components/ContactForWork/ContactForWork';
import Experience from '@/components/Experience/Experience';
import Stack from '@/components/Stack/Stack';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Manuel Latorre",
  description: "Desarrollador Web Fullstack",
};

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
