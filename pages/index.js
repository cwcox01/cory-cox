// importing components from components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Experiences from "@/components/Experiences/Experiences";
import Heading from "@/components/Heading/Heading";
import Hobbies from "@/components/Hobby/Hobbies";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Heading />
        <Experiences />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
