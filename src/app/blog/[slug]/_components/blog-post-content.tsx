import Image from "next/image";

import Overview, { Heading } from "./overview";

export function BlogPostContent() {
  const headings: Heading[] = [
    {
      title: "Section Title",
      level: 1,
      id: "section-title",
      children: [
        { title: "Subheading One", id: "heading-2", level: 2 },
        { title: "Subheading Two", id: "heading-3", level: 2 },
        { title: "Subheading Three", id: "heading-4", level: 2 },
        { title: "Final Thoughts", id: "heading-5", level: 2 },
      ],
    },
  ];

  return (
    <div className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <aside className="mb-8 lg:mb-0 lg:w-80">
            <Overview headings={headings} />
          </aside>
          <main className="lg:flex-1">
            <article className="prose prose-invert max-w-none prose-headings:font-poppins prose-headings:text-[#009fba] prose-p:font-poppins prose-p:text-white">
              <h2 id="heading-2">Heading 2</h2>
              <p className="font-bold">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                nulla odio nisl vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </p>
              <p>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
              </p>
              <h3 id="heading-3">Heading 3</h3>
              <p>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
              <p>
                Tristique odio senectus nam posuere ornare leo metus, ultricies.
                Blandit duis ultricies vulputate morbi feugiat cras placerat
                elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                pellentesque suscipit accumsan. Cursus viverra aenean magna
                risus elementum faucibus molestie pellentesque. Arcu ultricies
                sed mauris vestibulum.
              </p>
              <h4 id="heading-4">Heading 4</h4>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <figure>
                <Image
                  unoptimized
                  src="https://via.placeholder.com/768x480"
                  alt="Placeholder image"
                  width={768}
                  height={480}
                  layout="responsive"
                />
                <figcaption>Image caption goes here</figcaption>
              </figure>
              <h5 id="heading-5">Heading 5</h5>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <blockquote>
                &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
                enim mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus.&quot;
              </blockquote>
              <h6 id="heading-6">Heading 6</h6>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </p>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
