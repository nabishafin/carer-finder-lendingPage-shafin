"use client";

import React from "react";
import Image from "next/image";

// Local image imports
import googleplay from "../../public/gplay.png";
import appleplay from "../../public/aplay.png";
import phoneImage from "../../public/downloadimg.png";

const AppDownloadSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="w-full md:w-9/12 mx-auto px-4 md:px-0 mt-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C4479] mb-4">
            Download Now
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Phone Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-[600px] h-[600px] relative">
              <Image
                src={phoneImage}
                alt="Phone Mockup"
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Download the App and Find Your Perfect Job Today
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Available on iOS and Android. Start your journey towards a
                fulfilling career in just a few taps!
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src={googleplay}
                  alt="Get it on Google Play"
                  className="w-40 h-auto"
                />
              </div>

              <div className="cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  src={appleplay}
                  alt="Download on the App Store"
                  className="w-40 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
