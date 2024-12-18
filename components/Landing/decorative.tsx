export const Decorative = () => {
  return (
    <div className="flex items-center justify-center px-4 overflow-hidden w-full">
      <div className="bg-white rounded-[32px] relative p-8 md:p-16 text-center">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
          Business is much simpler when
          <br />
          everything is in one place
        </h1>
        <p className="text-lg md:text-xl mb-8">
          See for yourself. Try Podia free for 30 days.
        </p>
        <button className="bg-[#151718] text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-black transition-colors">
          Get started
        </button>

        {/* Decorative shapes */}
        <div className="absolute -left-3 md:-left-6 top-1/4 w-6 md:w-8 h-6 md:h-8 bg-[#151718] rounded-tr-[50%] rounded-bl-[50%]" />
        <div className="absolute -right-2 md:-right-3 top-8 w-4 md:w-6 h-4 md:h-6 bg-[#151718] rotate-45" />
      </div>

      {/* Background shapes */}
      <div className="absolute right-[20%] top-[20%] w-8 h-8 bg-white rounded-lg rotate-12" />
      <div className="absolute left-[25%] bottom-[15%] w-10 h-10 bg-white/80 rounded-lg -rotate-12" />
    </div>
  );
};
