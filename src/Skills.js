export default function Skills({ skills }) {
  return (
    <div>
      <div className="uppercase text-2xl font-light">SKILLS</div>
      {skills.map(({ name, keywords }) => (
        <>
          <div className="font-bold">{name}</div>
          <div className="flex flex-wrap">
            {keywords.map(k => (
              <div className="bg-slate-200 p-2">{k}</div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}