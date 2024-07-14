import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import AnimatedImage from "site/islands/AnimatedImage.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Product {
  label: string;
  coverImage?: ImageWidget;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export interface Props {
  products?: Product[];
}

export default function OurProducts({
  products = [
    {
      label: "Structured",
      coverImage:
        "https://image.cdn2.seaart.ai/2023-09-19/17608037542924293/248700b74c97e1e906d1b13fb4773348967356fe_low.webp",
      title: "Structured Course",
      text: `
        <p class="secondary-paragraph margin-bottom-medium">The <strong>structured course</strong> is best for beginners, we provide a fully structured course covering everything from beginning to end. Courses with the <i>breadth</i> and <i>depth</i> we offer are non-existent. Even those who are experienced or have had a gap will most high value gain from this course. The top benifits are listed below:</p>
        <style>
          ul {
            list-style-type: square;
          }
        </style>
        <ul class="py-[1rem] px-[2rem] m-[1rem] text-white md:max-w-[80%] leading-[1.25] drop-shadow-md border-[#4444] rounded-lg backdrop-blur-md bg-[#dddddd08] text-[1rem] text-md lg:text-[1.15rem]">
          <li>Learn from top chess players</li>
          <li>Over 1500 Lessons</li>
          <li>100s of Strategy strengthing quizzes</li>
          <li>Personalization for learning based on rating</li>
          <li>Analyze 5 Games for Free Everyday</li>
        </ul>
      `,
      cta: {
        label: "Explore More",
        url: "https://www.endgame!.com/",
      },
    },
    {
      label: "Hadnamde",
      coverImage: "https://wallpapercave.com/wp/wp12910313.jpg",
      title: "Handmade Course",
      text: `
       <p class="secondary-paragraph margin-bottom-medium">The <strong>handmade course</strong> is best for experienced chess players, or those seeking a more robust experience catering to their needs. We will take into account your previous experience and your skill level to ensure that you get the most out of our course.You may look at add-on options by clicking the button below. Highlighted below are the advantages of your personal handmade course over the structured course:</p>
       <ul class="py-[1rem] px-[2rem] m-[1rem] text-white md:max-w-[80%] leading-[1.25] drop-shadow-md border-[#4444] rounded-lg backdrop-blur-md bg-[#dddddd08] text-[1rem] text-md lg:text-[1.15rem]">
         <li>Get Assigned Personal Mentors</li>
         <li>Full Personalization Just For You</li>
         <li>Priority Support From All Our Coaches</li>
         <li>Unlimited and Deeper Analysis</li>
         <li>Get Paid to Move Up The Ranks!</li>
       </ul>
      `,
      cta: {
        label: "Explore More",
        url: "https://www.endgame!.com/",
      },
    },
  ],
}: Props) {
  return (
    <div
      id="our-products"
      class="flex flex-col bg-base-200 desk:h-[max-content] !z-5"
    >
      {products.map(
        ({ label, coverImage, title, text, cta }, index) => (
          <div
            class={`flex flex-col ${
              index % 2 === 0 ? "desk:flex-row" : "desk:flex-row-reverse"
            }`}
          >
            <div class="desk:w-[50%] desk:max-h-[768px] aspect-square">
              {coverImage && (
                <AnimatedImage loading="lazy" src={coverImage} fit="cover" />
              )}
            </div>
            <div class="flex flex-col py-8 px-6 ss:p-8 md:p-16 text-white desk:py-24 desk:px-20 desk:max-w-[50%] desk:max-h-[768px]">
              <div class="w-fit bg-[rgba(124,124,124,.12)] rounded-sm text-[rgba(255,255,255,.6)] uppercase py-1 px-2 text-[12px] md:text-[14px] mb-6">
                Our Products
              </div>
              {title && (
                <div
                  class="text-[32px] font-medium leading-[1.1] md:text-[42px] desk:text-[45px] mb-6 ss:mb-8"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              )}
              {text && (
                <div
                  class="text-[16px] font-light leading-[1.4] mb-12 ss:mb-16"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {cta && (
                <a
                  href={cta.url}
                  class="border-none outline-none cursor-pointer font-medium w-fit bg-[#ebebeb] rounded-[100px] py-3 px-8 text-[.8em] uppercase text-[#050505] mb-6 ss:mb-8 group"
                >
                  <div class="overflow-hidden h-[1.4rem]">
                    <div class="transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]">
                      {cta.label}
                    </div>
                    <div class="transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]">
                      {cta.label}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
