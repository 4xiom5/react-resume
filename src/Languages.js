export default function Languages({ languages }) {
  return (
    <div>
      <div className="uppercase text-2xl font-light">Languages</div>
      <div className="flex flex-col">
        {languages.map(l => (
          <div className="flex">
            <div className="w-1/2">{l.language}</div>
            <div className="w-1/2">{l.fluency}</div>
          </div>
        ))}
      </div>
    </div>
  );
}