import Header from "@/components/ui/header";
import Introduction from "@/components/ui/introduction";
import Skills from "@/components/ui/skills";

export default function Home() {
  return (
    <div  className="flex flex-col ">
        <Header/>
        <Introduction/>
        <Skills/>
    </div>
  );
}
