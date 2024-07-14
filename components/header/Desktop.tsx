import Image from "apps/website/components/Image.tsx";
import { Props } from "site/sections/Header.tsx";

export default function DesktopHeader({ logo, navLinks }: Required<Props>) {
  return (
    <nav class="flex justify-center w-full">
      <div class="max-w-[1480px] pl-6 pr-3 py-4 lg:py-2 mx-auto sm:px-8 sm:py-[30px] flex justify-between items-center !font-['sans'] bg-[#3333] backdrop-blur lg:my-[1rem] rounded-xl lg:fixed lg:min-w-max">
        <div class="flex">
          {navLinks.slice(0, 3).map((link) => (
            <div className="w-auto overflow-hidden h-[20px] group flex flex-col whitespace-nowrap">
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
        {logo && (
          <a
            href="/"
            aria-label="home"
            aria-current="page"
            class="ps-24 pe-24 inline-block"
          >
            <Image
              src={logo}
              alt="The logo"
              class="h-[25px] w-[25px] md:w-[35px] md:h-[35px]"
              width={138}
              height={35}
            />
          </a>
        )}
        <div class="flex">
          {navLinks.slice(-3).map((link) => (
            <div className="w-auto overflow-hidden h-[20px] group flex flex-col whitespace-nowrap">
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
              <a
                href={link.href}
                className="block text-white uppercase text-sm font-medium px-3 transition-transform duration-300 transform-gpu group-hover:translate-y-[-100%]"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
