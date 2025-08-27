"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from '@heroui/react';
import Navbar from '@/components/landing/navbar';
import HeroSection from '@/components/landing/hero';
import Footer from '@/components/landing/footer';
import Features from '@/components/landing/features';
import HowItWorks from "@/components/landing/howItWorks";
import CTA from "@/components/landing/cta";
import Testimonials from "@/components/landing/testimoniaals";
import QuizPreview from "@/components/landing/quizPreview";
function SkillQuizLanding() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-black dark:text-white" >
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <QuizPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default () => <HeroUIProvider children={
  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true} >
    <SkillQuizLanding />
  </NextThemesProvider>
}/>