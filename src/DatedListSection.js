function datesToYearRange(startDate, endDate) {
  const startYear = startDate ? new Date(startDate).getFullYear() : null

  let yearRange = startYear.toString();

  if (endDate) {
    const endYear = new Date(endDate).getFullYear()
    yearRange += "-" + endYear;
  } else {
    yearRange += "-NOW";
  }

  return yearRange;
}

export default function DatedListSection({ data, title }) {
  return (
    <div className="flex flex-col">
      <div className="uppercase text-2xl font-light border-b border-slate-200 mb-1">{title}</div>
      <div className="grid grid-flow-row grid-cols-[min-content_auto]">
          {data.map(({ name, position, area, location, startDate, endDate, summary }) => (
            <>
              <div className="whitespace-nowrap text-right align-top text-xl font-light pr-2">{datesToYearRange(startDate, endDate)}</div>
              <div>
                <div className="flex text-xl font-bold">
                  <div>{position}</div>
                  {area && <div className="font-normal">, {area}</div>}
                </div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-md font-light">{location}</div>
                <div className="text-lg leading-tight my-1">{summary}</div>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}