"use client";

import Image from "next/image";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import useClickableCard from "@/hooks/useClickableCard";
import { Skill } from "@/payload-types";

const skillsConfig = {
  title: "Innovative",
  heading: "My Core Technical Skills and Proficiencies",
  description:
    "I specialize in creating efficient and scalable software solutions. My expertise spans across various programming languages and frameworks.",
  skills: [
    {
      image: "/img/devices.jpg",
      title: "Proficient in Frontend and Backend Development",
      description:
        "I excel in both frontend technologies like React and backend frameworks such as Node.js.",
    },
    {
      image: "/img/big-data.jpg",
      title: "Experienced in Database Management and Optimization",
      description: "I have a strong background in SQL and NoSQL databases.",
    },
    {
      image: "/img/collaboration.jpg",
      title: "Skilled in Agile Methodologies and Team Collaboration",
      description:
        "I thrive in Agile environments, ensuring effective teamwork.",
    },
  ],
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

export function SkillsSectionClient({ skills }: { skills: Skill[] }) {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <FadeInWhenVisible className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-start gap-12 text-center">
          <StaggerChildren className="space-y-4">
            <h2 className="font-roboto text-base font-semibold leading-normal text-white">
              {skillsConfig.title}
            </h2>
            <h3 className="font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
              {skillsConfig.heading}
            </h3>
            <p className="mx-auto max-w-3xl font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
              {skillsConfig.description}
            </p>
          </StaggerChildren>

          <StaggerChildren className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </StaggerChildren>

          <FadeInWhenVisible className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button variant="default">Learn</Button>
            <Button variant="outline">
              Connect
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </FadeInWhenVisible>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  const imageUrl =
    typeof skill.meta?.image === "object" ? skill.meta?.image?.url : null;

  const { link, card } = useClickableCard({});

  return (
    <motion.div
      ref={card.ref as any}
      variants={itemVariants}
      className="group flex cursor-pointer flex-col items-center gap-6"
    >
      <Image
        src={imageUrl || "/img/devices.jpg"}
        alt={skill.title}
        width={405}
        height={240}
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-[1.05]"
      />
      <div className="space-y-4 text-center">
        <h4 className="font-poppins text-2xl font-semibold leading-tight text-white">
          {skill.title}
        </h4>
        <p className="font-poppins text-base font-normal leading-normal text-white">
          {skill.meta?.description}
        </p>
        <motion.a
          ref={link.ref as any}
          href={`/skills/${skill.slug}`}
          className="mt-auto inline-flex items-center text-base font-normal leading-normal text-white transition-colors hover:text-[#ff8328]"
          aria-label={`learn more ${skill.title}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {"Learn More"}
          <ChevronRightIcon className="ml-2 h-5 w-5 text-primary" />
        </motion.a>
      </div>
    </motion.div>
  );
}
