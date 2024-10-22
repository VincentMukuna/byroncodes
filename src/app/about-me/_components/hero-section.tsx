import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#201b1b] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start justify-start gap-8 lg:max-w-[50%]">
            <h1 className="font-poppins text-3xl font-semibold leading-tight">
              Discover My Journey: A Passionate Software Developer Committed to
              Excellence
            </h1>
            <p className="font-poppins text-lg font-normal leading-relaxed">
              With a background in computer science and years of hands-on
              experience, I specialize in creating innovative software
              solutions. My journey has equipped me with the skills to tackle
              complex challenges and deliver results that exceed expectations.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[30px] lg:w-[45%]">
            <Image
              className="object-cover object-[left_30%] transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Image of byron smiling at the camera"
              priority
              fill
              src="/img/byron-about.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
