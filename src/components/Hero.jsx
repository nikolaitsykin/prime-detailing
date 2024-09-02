import React from "react";
import Button from "./UI/Button";
import detailingVideo from "../assets/videos/6158070-hd_1920_1080_30fps.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="w-full z-10">
      <div className="relative">
        <div className="bg-black">
          <video
            className="opacity-40 object-cover min-h-[450px] w-full mx-auto"
            autoPlay
            loop
            playsInline
            muted
            type="video/mp4"
            src={detailingVideo}
          />
        </div>
        <div className="absolute top-1 sm:inset-y-8 px-10 py-32 sm:px-32">
          <p className="text-white text-xl md:text-4xl w-full flex justify-center">
            Mobile detailing service in Triagle area
          </p>
          <p className="text-xs  md:text-sm text-white pt-5 w-full flex justify-center">
            Whether you want to protect your car or give it a clean look, we
            deliver top-quality service at the best prices. Trust us to enhance
            and safeguard your vehicle with the care it deserves.
          </p>
          <div className="pt-2 md:pt-5 flex flex-col xs:flex-row justify-center items-center">
            <div className="p-2 md:p-5">
              <Link to="/booking">
                <Button children={"BOOK NOW"} color={"primary"} />
              </Link>
            </div>
            <div className="md:p-2">
              <a href="tel:2673106864" className="flex">
                <Button children={"CALL NOW"} color={"primary"} />
              </a>
            </div>
          </div>
        </div>
        <section className="w-[80%] mx-auto py-16">
          <div className="text-black text-xs md:text-sm w-full flex justify-center">
            We Bring Detailing to Your Doorstep Whether you’re at home, your
            apartment, or the office, we come to you. Our fully equipped mobile
            detailing unit carries everything needed—including our own power and
            water supply—to provide top-notch service wherever you are. All we
            need is access to your vehicle, and we’ll take care of the rest. We
            proudly serve Goldsboro, NC, and the surrounding areas. While there
            may be some location-based limitations or criteria, we always strive
            to accommodate your needs and schedule you in.
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
