import Head from "next/head";
import Image from "next/image";
import banner1 from "../public/banner1.jpg";
import banner2 from "../public/banner2.jpg";
import banner3 from "../public/banner3.jpg";
import banner4 from "../public/banner4.jpg";
import banner5 from "../public/banner5.jpg";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useCallback } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

export default function Home() {
  // Define autoplay options
  const autoplayOptions = {
    delay: 2000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  // Initialize the first Embla Carousel instance
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  // Initialize the second Embla Carousel instance
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  // Scroll to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Scroll to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <Head>
        <title>TrendVogue</title>
        <meta ngithubame="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* HomePage */}
      <main>
        {/* Carousel */}
        <div>
          {/* Embla Carousel Container */}
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              {/* Embla Carousel Inner Container */}
              <div className="embla__container">
                {/* Carousel slides */}
                <div className="embla__slide">
                  <Image src={banner4} priority alt="Banner" />
                </div>
                <div className="embla__slide">
                  <Image src={banner5} alt="Banner" />
                </div>
                <div className="embla__slide">
                  <Image src={banner2} alt="Banner" />
                </div>
                <div className="embla__slide">
                  <Image src={banner3} alt="Banner" />
                </div>
                <div className="embla__slide">
                  <Image src={banner1} alt="Banner" />
                </div>
              </div>

              <button
                className="embla__prev text-4xl absolute top-96 left-5 text-black bg-gray-100 bg-opacity-40 rounded-full p-3"
                onClick={scrollPrev}
              >
                <FaChevronLeft />
              </button>
              <button
                className="embla__next text-4xl absolute top-96 right-5 text-black bg-gray-100 bg-opacity-40 rounded-full p-3"
                onClick={scrollNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h1 className="mb-2 text-center text-xl md:text-2xl font-bold text-red-600 md:mb-12 lg:text-4xl">
              TOP CATEGORIES
            </h1>

            <div className="grid gap-2 grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              <div>
                <Link
                  href="/MenTshirt"
                  className="group relative flex h-52 md:h-96 items-end overflow-hidden rounded-xl bg-gray-100 p-4 shadow-lg"
                >
                  <Image
                    src="https://images.bewakoof.com/t1080/men-s-brown-blue-tie-dye-shirt-624430-1695906066-1.jpg"
                    width={1200}
                    height={500}
                    loading="lazy"
                    alt="Photo by engin akyurt"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-red-500 p-2 md:p-4 text-center">
                    <span className="md:text-lg font-bold text-white lg:text-2xl">
                      Men
                    </span>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  href="/WomenTshirt"
                  className="group relative flex h-52 md:h-96 items-end overflow-hidden rounded-xl bg-gray-100 p-4 shadow-lg"
                >
                  <Image
                    src="https://images.bewakoof.com/t1080/women-s-white-all-over-leaf-printed-dress-ssumr23cswssdr259-604116-1689843500-1.jpg"
                    width={1200}
                    height={500}
                    loading="lazy"
                    alt="Photo by engin akyurt"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-red-500 p-2 md:p-4 text-center">
                    <span className="md:text-lg font-bold text-white lg:text-2xl">
                      Women
                    </span>
                  </div>
                </Link>
              </div>

              <div>
                <Link
                  href="/"
                  className="group relative flex h-52 md:h-96 items-end overflow-hidden rounded-xl bg-gray-100 p-4 shadow-lg"
                >
                  <Image
                    src="https://images.bewakoof.com/t1080/hanya-mask-premium-glass-case-for-apple-iphone-15-pro-max-621031-1695390167-1.jpg?tr=q-100"
                    width={1200}
                    height={500}
                    loading="lazy"
                    alt="Photo by engin akyurt"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-red-500 p-2 md:p-4 text-center">
                    <span className="md:text-lg font-bold text-white lg:text-2xl">
                      Mobile Covers
                    </span>
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="group relative flex h-52 md:h-96 items-end overflow-hidden rounded-xl bg-gray-100 p-4 shadow-lg"
                >
                  <Image
                    src="https://images.bewakoof.com/uploads/grid/app/HeavyDuty-1x1-common-1698331570.jpg"
                    width={1200}
                    height={500}
                    loading="lazy"
                    alt="Photo by engin akyurt"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-red-500 p-2 md:p-4 text-center">
                    <span className="md:text-lg font-bold text-white lg:text-xl">
                      Sale
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel2 */}
        <div>
          {/* Heading */}
          <h1 className="mb-2 text-center text-xl md:text-2xl font-bold text-red-600 md:mb-12 lg:text-4xl">
            TOO HOT TO BE MISSED
          </h1>

          {/* Embla Carousel */}
          <div className="embla">
            {/* Embla Viewport */}
            <div className="embla__viewport" ref={emblaRef1}>
              {/* Embla Container */}
              <div className="embla__container">
                {/* Slide 1 */}
                <Link href={"/aboutUs"} className="embla__slide1">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={50}
                    src={
                      "https://images.bewakoof.com/uploads/grid/app/1x1-Banner-Sweatshirts-and-Hoodies---3--1698381629.jpg"
                    }
                    priority
                    alt="Banner"
                  />
                </Link>

                {/* Slide 2 */}
                <Link href={"/MenTshirt"} className="embla__slide1">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={50}
                    src={
                      "https://images.bewakoof.com/uploads/grid/app/1X1-MEN-POFST-1698382566.jpg"
                    }
                    priority
                    alt="Banner"
                  />
                </Link>

                {/* Slide 3 */}
                <Link href={"/MenTshirt"} className="embla__slide1">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={50}
                    src={
                      "https://images.bewakoof.com/uploads/grid/app/Sweaters-1x1-Banner-Common-1698382164.jpg"
                    }
                    priority
                    alt="Banner"
                  />
                </Link>

                {/* Slide 4 */}
                <Link href={"/MenTshirt"} className="embla__slide1">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={50}
                    src={
                      "https://images.bewakoof.com/uploads/grid/app/newbanner-1x1-AIRWindcheater-common-1-1698331048.jpg"
                    }
                    priority
                    alt="Banner"
                  />
                </Link>

                {/* Slide 5 */}
                <Link href={"/MenTshirt"} className="embla__slide1">
                  <Image
                    className="rounded-xl"
                    width={400}
                    height={50}
                    src={
                      "https://images.bewakoof.com/uploads/grid/app/HeavyDuty-1x1-common-1698331570.jpg"
                    }
                    priority
                    alt="Banner"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-xl font-bold text-red-600 lg:text-3xl">
                  OUR BEST PICKS
                </h2>

                <p className="hidden max-w-screen-sm text-gray-500 md:block">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>

              <a
                href="#"
                className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </a>
            </div>
            <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="https://images.bewakoof.com/uploads/grid/app/Festive-Sale-Midsize-Banners-7-1697730581.jpg"
                  width={1200}
                  height={500}
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="object-cover object-center transition duration-300 hover:scale-110"
                ></Image>
              </div>
              <div className="rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="https://images.bewakoof.com/uploads/grid/app/Festive-Sale-Midsize-Banners-5--1--1697731227.jpg"
                  width={1200}
                  height={500}
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="object-cover object-center transition duration-300 hover:scale-110"
                ></Image>
              </div>
              <div className="rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-JOG-women-callout-1697435900-1697732382.jpg"
                  width={1200}
                  height={500}
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="object-cover object-center transition duration-300 hover:scale-110"
                ></Image>
              </div>
              <div className="rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src="https://images.bewakoof.com/uploads/grid/app/unnamed-1697731530.jpg"
                  width={1200}
                  height={500}
                  loading="lazy"
                  alt="Photo by engin akyurt"
                  className="object-cover object-center transition duration-300 hover:scale-110"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
