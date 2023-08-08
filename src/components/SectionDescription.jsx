export function Text({ title, text }) {
  return (
    <>
      <h1 className="text-xl font-bold text-[#001e4c] md:text-4xl">{title}</h1>
      <p className="text-sm text-[#9699ab] md:my-1 md:mb-5">{text}</p>
    </>
  )
}
