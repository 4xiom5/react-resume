
function Page({ basics, skills, languages }) {

  return (
    <div className="w-a4 h-a4 mx-auto my-4 shadow-2xl text-slate-800">
      <div className="w-1/3 h-full p-4 bg-slate-100">
        <div>
          <img
            src={basics.image}
            className="rounded-full mb-4"
          />
          <div>
            <div className="text-4xl font-bold">
              {basics.name}
            </div>
            <div className="text-xl font-extralight uppercase">
              {basics.label}
            </div>
          </div>
        </div>
        <div>
          <div className="uppercase text-2xl font-light">SKILLS</div>
          {skills.map(({name, keywords}) => (
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
        <div>
          <div className="uppercase text-2xl font-light">Contact</div>
        </div>
      </div>

      <div className="w-full h-full">

      </div>
    </div>
  );
}

export default Page;
