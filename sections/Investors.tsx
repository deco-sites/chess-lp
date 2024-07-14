import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Investor {
  label: string;
  image: ImageWidget;
}

export interface Props {
  title?: string;
  investors?: Investor[];
}

export default function OurInvestors({
  title = "Our investors",
  investors = [
    {
      label: "A",
      image: "https://pngimg.com/d/letter_a_PNG19884.png",
    },
    {
      label: "B",
      image: "https://pngimg.com/d/letter_a_PNG19884.png",
    },
    {
      label: "C",
      image: "https://pngimg.com/d/letter_a_PNG19884.png",
    },
    {
      label: "D",
      image: "https://pngimg.com/d/letter_a_PNG19884.png",
    },
    {
      label: "E",
      image: "https://pngimg.com/d/letter_a_PNG19884.png",
    },
  ],
}: Props) {
  return (
    <div
      id="investors"
      class="flex flex-col items-center justify-center min-h-[60svh] px-6 py-[60px]"
    >
      <div class="text-[24px] leading-[1.2] md:text-[42px] text-[#c4c4c4] font-normal">
        {title}
      </div>
      <div class="w-full flex flex-col items-center justify-center flex-nowrap ss:flex-row ss:flex-wrap gap-[45px] ss:gap-[64px] pt-[56px]">
        {investors.map(({ label, image }) => (
          <Image
            class="w-fit h-8 ss:h-10 grayscale"
            alt={label}
            src={image}
            width={264}
            height={40}
          />
        ))}
      </div>
    </div>
  );
}
