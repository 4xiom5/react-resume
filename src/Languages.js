import SidebarSection from "./SidebarSection";

export default function Languages({ languages, title }) {
  return (
    <SidebarSection title={title}>
      <div className="flex flex-col divide-y">
        {languages.map((l, i) => (
          <>
            <div className="flex py-2">
              <div className="w-1/2 font-semibold">{l.language}</div>
              <div className="w-1/2 text-right">{l.fluency}</div>
            </div>
          </>
        ))}
      </div>
    </SidebarSection>
  );
}