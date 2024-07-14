import { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  desktopImage?: ImageWidget;
  mobileImage?: ImageWidget;
  _title?: HTMLWidget;
}

export default function Hero({
  desktopImage =
    "https://wallpaper.forfun.com/fetch/03/03fcf3213fcf72f9632092804abd88a2.jpeg",
  mobileImage =
    "https://w0.peakpx.com/wallpaper/840/392/HD-wallpaper-aesthetic-black-chess-king-aesthetic-black-chess-king-game.jpg",
  _title = "The interplanetary payment network.",
}: Props) {
  return (
    <div class="relative w-full h-screen z-10">
      <style>
        {`
        .hero-background {
            background-image: url(${desktopImage});
            background-position: 50%;
          }

          @media screen and (max-width: 991px) {
            .hero-background {
              background-image: url(${mobileImage});
              background-position: 100% 75%;
              background-size: cover;
            }
          }

          @media screen and (max-width: 767px) {
            .hero-background {
              background-position: 86% 100%;
            }
          }

          @media screen and (max-width: 479px) {
            .hero-background {
              background-position: 107svw 100%;
            }
          }

          h1 strong {
            background-size:  100% 15%;
            background-repeat: repeat-x;
            background-position: left 0% bottom 10%;
          }

          h1 > strong:nth-of-type(1) {
            background-image: linear-gradient(179deg, #805231 0%, #805231 50%,transparent 54%, transparent 100%);
          }

          h1 > strong:nth-of-type(2) {
            background-image: linear-gradient(181deg, #805231 0%, #805321 50%, transparent 54%, transparent 100%);
          }
      `}
      </style>
      <div class="absolute top-0 left-0 w-full h-full bg-cover hero-background">
        <div class="w-full max-w-[1480px] mx-auto pt-[12vh] md:pt-[20vh] pb-12 md:pb-[22vh] h-full">
          <h1 class="px-6 md:px-[60px] pt-[7vh] pb-[3.5vh] md:pt-[12vh] md:pb-[12vh] text-[2.75rem] md:text-7xl font-medium text-white max-w-[85%] md:max-w-[50%] leading-[1.1] -tracking-[.02em] !font-['Old Standard TT'] drop-shadow-xl">
            <strong>Dominate</strong> the Chessboard. Your Path to{" "}
            <strong>Chess</strong> Mastery
          </h1>
          <article class="p-[1rem] m-[1rem] text-white max-w-[80%] float-right md:hidden leading-[1.25] drop-shadow-md border-[#4444] rounded-lg backdrop-blur-md z-10 bg-[#dddddd08] text-[1.15rem] text-md">
            Give yourself the highest competitive advantage, Millions of games,
            hundreds of books all together, all at once. Various top players
            guiding you to peaks of your potential providing you the most
            remarkable journey.
          </article>
        </div>
      </div>
    </div>
  );
}
