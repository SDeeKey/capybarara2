import Header from "@/components/ui/header";
import Introduction from "@/components/ui/introduction";
import Skills from "@/components/ui/skills";
import Experience from "@/components/ui/experience";
import Work from "@/components/ui/work";
import Testimonials from "@/components/ui/testimonials";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <div  className="flex flex-col ">
        <Header/>
        <Introduction/>
        <Skills/>
        <Experience/>
        <Work/>
        <Testimonials/>
        <Contact/>
    </div>
  );
}
