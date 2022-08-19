export default function Avatar({ name, label, image }) {
  return (
    <div>
      <img
        src={image}
        className="rounded-full mb-4"
      />
      <div>
        <div className="text-4xl font-bold">
          {name}
        </div>
        <div className="text-xl font-extralight uppercase">
          {label}
        </div>
      </div>
    </div>
  )
}