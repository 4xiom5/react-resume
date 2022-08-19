import SidebarSection from "./SidebarSection";

export default function Skills({ title, skills }) {
  return (
    <SidebarSection title={title}>
      {skills.map(({ name, keywords }) => (
        <>
          <div className="font-semibold my-0.5">{name}</div>
          <div className="flex flex-wrap gap-2">
            {keywords.map(k => (
              <div className="bg-slate-200 p-2 rounded-lg">{k}</div>
            ))}
          </div>
        </>
      ))}
    </SidebarSection>
  );
}