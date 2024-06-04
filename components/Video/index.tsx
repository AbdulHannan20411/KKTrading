"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 pt-16 md:pt-20 lg:pt-28" id="ceo">
      <div className="container border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <SectionTitle
          title="Meet Our CEO"
          paragraph="In the name of Allah, the Most Gracious, the Most Merciful,
As the CEO of KK TRADING, I am deeply grateful for the blessings and guidance
bestowed upon us by the Almighty. Our journey from humble beginnings to
becoming a leading manufacturer and distributor of Motorcycle Spare Parts and
Voltage Stabilizers in Pakistan has been guided by His wisdom and grace.
At KK TRADING, we believe in conducting our business affairs with integrity,
honesty, and compassion, in accordance with the teachings of Islam. Our
commitment to excellence is rooted in the Islamic principles of striving for
perfection in all our endeavors and serving humanity with sincerity and dedication."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[3/2] items-center justify-center">
                <Image src="/images/video/ceo.png" alt="video image" fill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="nRXdKpqbaEE"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
