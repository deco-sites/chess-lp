import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Props {
  image?: ImageWidget;
  tag?: string;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export default function FullImageScroll({
  image =
    "https://www.baltana.com/files/wallpapers-29/Chess-HD-Desktop-Wallpaper-88820.jpg",
  tag = "The Frontier",
  title = "Zenith",
  text =
    "Meet the new generation of chess AI, a new frontier of possibilities. Allow yourself to interact with the revolutionary 'Zenith'; Your path to learn more than you could ever need, analyze games flawlessly with insights you never had before. ",
  cta = {
    label: "Explore Possibilities",
    url: "#",
  },
}: Props) {
  return (
    <div class="w-full h-screen relative text-[18px] lg:flex shadow-inner">
      <Image
        class="absolute top-0 left-0 w-full h-full object-cover bg-center z-3"
        width={960}
        height={540}
        src={image}
      />
      <div class="flex flex-col justify-center items-center w-full h-full lg:h-[94%] overflow-hidden backdrop-blur-xl lg:mx-[2rem] lg:my-[2%] lg:rounded-xl lg:bg-[#3333] lg:border-[#6666] lg:border-2">
        <div class="relative bg-[rgba(83,83,83,.1)] py-1 px-2 mb-4 font-medium text-[#111] text-[14px] uppercase rounded-xl backdrop-blur">
          {tag}
        </div>
        <div class="pb-[1.2em] ss:py-[2em]">
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            class="relative uppercase text-[4em] leading-[1] ss:text-[7em] md:text-[9em] desk:text-[10em] text-[#111] opacity-[.72] whitespace-nowrap font-medium"
          >
          </h1>
        </div>
        <div
          class="relative text-center text-[16px] ss:text-[20px] desk:text-[24px] text-[#111] font-normal max-w-[85%] ss:max-w-[78%] leading-[1.4] lg:w-[50%]"
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {cta && (
          <a
            href={cta.url}
            class="relative bg-[rgba(255,255,255,.35)] text-[#7e7e7e] text-[.8em] font-medium py-3 px-8 rounded-[100px] mt-8 uppercase group"
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
  );
}
