import { memo, useEffect } from "react";
import Link from "next/link";

const MainHeader = memo(() => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <header
      className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border [&.animate]:sm:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] sm:opacity-[0]"
      data-animate-on-scroll
    >
      <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-primary-500 font-body-regular-600">
        <div className="shrink-0 flex flex-row items-center justify-center gap-[8px]">
          <img
            className="relative w-11 h-11 object-cover"
            alt=""
            src="/houseline@2x.png"
          />
          <div className="shrink-0 flex flex-col items-start justify-start">
            <h2 className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit">
              REIS
            </h2>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <div className="relative leading-[22px]">
            <Link href="/">
                HOME
              </Link>
            </div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative leading-[22px]">
            <Link href="/properties">
                PROPERTIES
              </Link>
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 hidden flex-row items-center justify-center lg:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </header>
    </header>
  );
});

export default MainHeader;
