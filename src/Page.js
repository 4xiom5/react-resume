import Avatar from "./Avatar";
import Contact from "./Contact";
import Languages from "./Languages";
import Skills from "./Skills";

export default function Page({ basics, skills, languages }) {

  return (
    <div className="w-a4 h-a4 mx-auto my-4 shadow-2xl text-slate-800">
      <div className="w-1/3 h-full p-4 bg-slate-100">
        <Avatar {...basics} />
        <Skills skills={skills} />
        <Languages languages={languages} />
        <Contact {...basics} />
      </div>

      <div className="w-full h-full">

      </div>
    </div>
  );
}
