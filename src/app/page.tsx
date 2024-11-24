import Header from "@/components/ui/header";
import Introduction from "@/components/ui/introduction";
import Skills from "@/components/ui/skills";
import Experience from "@/components/ui/experience";
import LinkIcon from "@/components/ui/linkIcon";
import Work from "@/components/ui/work";

export default function Home() {
  return (
    <div  className="flex flex-col ">
        <Header/>
        <Introduction/>
        <Skills/>
        <Experience/>
        <Work/>
    </div>
  );
}
