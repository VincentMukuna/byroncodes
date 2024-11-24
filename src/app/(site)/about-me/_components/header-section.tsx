import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";

export function HeaderSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="inline-flex flex-col items-start justify-start gap-20 bg-black px-4 py-28 md:px-16">
      <StaggerChildren
        variants={containerVariants}
        className="mx-auto inline-flex max-w-7xl flex-col items-start justify-start gap-x-20 gap-y-8 self-stretch md:flex-row"
      >
        <FadeIn
          variants={itemVariants}
          className="inline-flex flex-col items-start justify-start gap-6"
        >
          <div className="self-stretch text-[56px] font-normal leading-[67.20px] text-primary">
            Meet Your Developer
          </div>
        </FadeIn>
        <FadeIn
          variants={itemVariants}
          className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-6"
        >
          <div className="self-stretch text-xl font-normal leading-[30px] text-white">
            I&apos;m a passionate freelance software developer dedicated to
            crafting innovative solutions. With a focus on quality and user
            experience, I bring ideas to life through code.
          </div>
        </FadeIn>
      </StaggerChildren>
    </div>
  );
}
