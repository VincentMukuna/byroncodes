import Image from "next/image";

import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

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

export function SkillsSection() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-start gap-12 text-center">
          <div className="space-y-4">
            <h2 className="font-roboto text-base font-semibold leading-normal text-white">
              {skillsConfig.title}
            </h2>
            <h3 className="font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
              {skillsConfig.heading}
            </h3>
            <p className="mx-auto max-w-3xl font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
              {skillsConfig.description}
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {skillsConfig.skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-6">
                <Image
                  src={skill.image}
                  unoptimized
                  alt={skill.title}
                  width={405}
                  height={240}
                  className="object-cover"
                />
                <div className="space-y-4 text-center">
                  <h4 className="font-poppins text-2xl font-semibold leading-tight text-white">
                    {skill.title}
                  </h4>
                  <p className="font-poppins text-base font-normal leading-normal text-white">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button variant="default">Learn</Button>
            <Button variant="outline">
              Connect
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
