export function HeaderSection() {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-20 bg-black px-4 py-28 md:px-16">
      <div className="mx-auto inline-flex max-w-7xl flex-col items-start justify-start gap-x-20 gap-y-8 self-stretch md:flex-row">
        <div className="inline-flex flex-col items-start justify-start gap-6">
          <div className="self-stretch text-[56px] font-normal leading-[67.20px] text-white">
            Meet Your Developer
          </div>
        </div>
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="self-stretch text-xl font-normal leading-[30px] text-white">
            I&apos;m a passionate freelance software developer dedicated to
            crafting innovative solutions. With a focus on quality and user
            experience, I bring ideas to life through code.
          </div>
        </div>
      </div>
    </div>
  );
}
