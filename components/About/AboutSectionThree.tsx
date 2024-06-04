import Image from "next/image";





const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-2 lg:pt-8">
      <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="-mx-4 flex flex-wrap items-center">
          
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Experience
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  With a combined experience of over three decades, KK TRADING brings
                  unparalleled expertise to the table. Our commitment to quality and innovation has
                  enabled us to stay ahead in a competitive market, meeting the evolving needs of
                  our customers.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Infrastructure
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  KK TRADING operates state-of-the-art manufacturing facility equipped with
                  modern machinery and technology. Our production processes adhere to the
                  highest standards of quality control, ensuring that every product that leaves our
                  facility is of superior quality.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-l xl:text-2xl">
                  Market Presence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  While based in Lahore, Pak, KK TRADING has a nationwide presence, serving
                  customers across Pakistan. Our extensive distribution network ensures that our
                  products reach every corner of the country, meeting the demand for reliable
                  Motorcycle Spare Parts and Voltage Stabilizers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/mix_icon_1.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
