export function HeaderSection() {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-20 bg-background-secondary px-4 py-28 md:px-16">
      <div className="mx-auto inline-flex max-w-7xl flex-col items-start justify-start gap-x-20 gap-y-8 self-stretch md:flex-row">
        <div className="inline-flex flex-col items-start justify-start gap-6">
          <div className="self-stretch text-[56px] font-normal leading-[67.20px] text-primary">
            Explore My Projects
          </div>
        </div>
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6">
          <div className="self-stretch text-xl font-normal leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </div>
        </div>
      </div>
    </div>
  );
}
