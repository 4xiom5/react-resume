import Avatar from "./Avatar";
import Contact from "./Contact";
import DatedListSection from "./DatedListSection";
import Languages from "./Languages";
import Skills from "./Skills";

export default function Page({ basics, skills, languages, work, education, meta }) {

  return (
    <div className="w-a4 h-a4 mx-auto my-4 shadow-2xl text-slate-800 flex">
      <div className="w-1/3 h-full p-4 bg-slate-100 flex flex-col justify-between">
        <Avatar {...basics} />
        <Skills title={meta.skills} skills={skills} />
        <Languages title={meta.langs} languages={languages} />
        <Contact title={meta.contact} {...basics} />
      </div>

      <div className="w-2/3 h-full p-4 flex flex-col justify-around">
        <DatedListSection data={work} title={meta.work} />
        <DatedListSection title={meta.education} data={education.map(({
          studyType,
          area,
          institution,
          location,
          startDate,
          endDate
        }) => ({
          position: studyType, area, name: institution, location, startDate, endDate 
        }))} />
      </div>
    </div>
  );
}
