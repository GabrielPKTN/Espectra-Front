export default function OutlinedTitle({ children }) {
  return (
    <div className="relative inline-block">
      <h1
        className="
          absolute
          top-0
          left-0
          font-bold
          -translate-x-[18px]
          -translate-y-[2px]
          text-transparent
          [-webkit-text-stroke:1px_#89C771]
          opacity-30
          select-none
          mt-9
          text-2xl
          instrument-sans
          md:text-6xl -translate-x-[45px]
        "
      >
        {children}
      </h1>

      <h1
        className="
          relative
          text-lg
          font-bold
          text-[#89C771]
          mt-10
          instrument-sans
          md:text-5xl
        "
      >
        {children}
      </h1>
    </div>
  );
}