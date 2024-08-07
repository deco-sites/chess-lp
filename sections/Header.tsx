import { ImageWidget } from "apps/admin/widgets.ts";
import HeaderMobile from "site/components/header/Mobile.tsx";
import DesktopHeader from "site/components/header/Desktop.tsx";

interface NavLink {
  label: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  navLinks?: NavLink[];
}

export default function Header({
  logo =
    "https://images.vexels.com/content/254450/preview/king-chess-piece-simple-silhouette-5c1450.png",
  navLinks = [
    {
      label: "Our Mission",
      href: "#our-mission",
    },
    {
      label: "Our Pillars",
      href: "#our-pillars",
    },
    {
      label: "Our Products",
      href: "#our-products",
    },
    {
      label: "Investors",
      href: "#investors",
    },
    {
      label: "Work With Us",
      href: "#work-with-us",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
}: Props) {
  return (
    <>
      <header class="bg-transparent absolute top-0 left-0 w-full z-20">
        <div class="block md:hidden">
          <HeaderMobile logo={logo} navLinks={navLinks} />
        </div>
        <div class="hidden md:block">
          <DesktopHeader logo={logo} navLinks={navLinks} />
        </div>
      </header>
    </>
  );
}
