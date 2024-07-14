import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
<<<<<<< HEAD
    <div class="py-8 lg:px-0 px-6 fixed bottom-0 w-full mx-auto">
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
    </div>
=======
    <>
      <div id="contact" class="overflow-hidden bg-base-200">
        <div class="px-6 ss:px-8 min-h-[50svh] flex items-center max-w-[1480px] mx-auto">
          <div class="py-[60px] text-base-300 md:flex md:justify-between md:w-full md:gap-[40px]">
            <h2 class="mb-10 text-[32px] lg:text-[45px] font-medium md:flex md:items-center lg:w-[50%]">
              {contactUs.title}
            </h2>
            <div class="flex flex-col lg:w-[50%]">
              {contactUs.text?.map((item) => (
                <span
                  class="block mb-4"
                  dangerouslySetInnerHTML={{
                    __html: item,
                  }}
                >
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-300">
        <div class="pt-[54px] pb-9 bg-base-300 px-6 ss:px-8 flex flex-col md:flex-row md:items-center max-w-[1480px] mx-auto text-base-content gap-10">
          <div class="flex flex-col md:w-[50%]">
            {footerBottom.logo && (
              <a href={footerBottom.logoUrl}>
                <Image
                  src={footerBottom.logo}
                  alt="The logo"
                  class="w-[30px] h-[30px] ss:w-[45px] ss:h-[35px] aspect-square"
                  width={140}
                  height={35}
                />
              </a>
            )}
            <p class="text-sm font-light mt-2">{footerBottom.copyright}</p>
          </div>
          <div class="flex md:w-[50%]">
            {footerBottom.footerColumns?.map((cols) => (
              <div class="flex flex-col gap-2 w-full">
                <h3 class="font-medium">{cols.title}</h3>
                <ul>
                  {cols.text?.map((item) => (
                    <li
                      class="py-[2px] font-light"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    >
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
>>>>>>> bfa48c8 (End)
  );
}

export default Footer;
