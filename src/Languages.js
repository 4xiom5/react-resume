import SidebarSection from "./SidebarSection";

export default function Languages({ languages }) {
  return (
    <SidebarSection title="Language">
      <div className="flex flex-col">
        {languages.map((l, i) => (
          <>
            {i != 0 && <div className="h-0.5 w-full bg-slate-200"/>}
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