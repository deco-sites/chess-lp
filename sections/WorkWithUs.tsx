import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import AnimatedImage from "site/islands/AnimatedImage.tsx";

export interface CTA {
  label: string;
  url: string;
}

export interface Props {
  image?: ImageWidget;
  title?: HTMLWidget;
  text?: HTMLWidget;
  cta?: CTA;
}

export default function WorkWithUs({
  title = "Work with us.",
  text = `
    <p class="main-paragraph margin-bottom-medium">We're always looking for new talent. If you wish to be the part of the next generation of chess learning and competition and contribute to it whole-heartedly we are here to welcome you with open arms!<br><br> You can always check the open positions below. If you wish to apply to any of them please fill out the form corresponding to the positions in the redirected page! Further details are provided therein.</p>
  `,
  image =
    "https://www.regencychess.com/blog/wp-content/uploads/2022/10/4108661.jpg",
  cta = {
    label: "See open positions",
    url: "#",
  },
}: Props) {
  return (
    <div
      id="work-with-us"
      class="flex flex-col px-6 py-[60px] ss:p-8 md:py-16 md:px-8 gap-3 ss:gap-6 text-[18px] desk:flex-row max-w-[1480px] mx-auto"
    >
      <div class="desk:w-1/2">
        <AnimatedImage
          src={image}
          loading="lazy"
          imageClass="max-h-[64svh] desk:max-h-none w-full h-full bg-center aspect-square grayscale"
        />
      </div>
      <div class="bg-[#181818] text-white flex flex-col p-8 gap-10 desk:w-1/2 desk:p-16 desk:justify-between">
        <div
          class="leading-[1.1] font-medium text-[32px] md:text-[42px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div class="flex flex-col">
          <div class="text-[16px]" dangerouslySetInnerHTML={{ __html: text }} />
          {cta && (
            <a
              href={cta.url}
              class="block w-fit bg-[#ebebeb] text-[#050505] text-[.8em] font-medium py-3 px-8 rounded-[100px] mt-12 uppercase group"
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
    </div>
  );
}
