export function HeaderSection() {
  return (
    <header className="flex flex-col items-start justify-start gap-4 px-4 py-16 md:px-16 md:py-28">
      <div className="inline-flex items-center justify-start self-stretch">
        <div className="font-roboto text-base font-semibold leading-normal text-white">
          Blog
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-6 self-stretch">
        <div className="self-stretch text-4xl font-semibold text-[#ff8328] md:text-[56px] md:leading-[67.20px]">
          Explore Our Latest Insights
        </div>
        <div className="self-stretch text-base font-normal text-white lg:text-xl lg:leading-[30px]">
          Dive into topics like coding, tech trends, and more.
        </div>
      </div>
    </header>
  );
}
