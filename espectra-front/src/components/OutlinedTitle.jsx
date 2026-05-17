export default function OutlinedTitle({ children }) {
  return (
    <div className="relative inline-block">
      <h1
        className="
          absolute
          top-0
          left-6
          font-bold
          -translate-y-[2px]
          text-transparent
          [-webkit-text-stroke:1px_#89C771]
          opacity-30
          select-none
          mt-9
          text-3xl
          instrument-sans
          md:text-6xl -translate-x-[45px]
          lg:m-0
        "
      >
        {children}
      </h1>

      <h1
        className="
          relative
          text-2xl
          font-bold
          text-[#89C771]
          mt-10
          instrument-sans
          md:text-5xl
          lg:mt-1
        "
      >
        {children}
      </h1>
    </div>
  );
}