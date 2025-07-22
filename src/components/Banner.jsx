"use client";
import Image from "next/image";
import bannerImage from "../../public/banner.jpg";
import imageUrl from "../../public/bannerimg.png";

export default function Banner() {
  return (
    <section className="relative h-[80vh] min-h-[500px] sm:h-[70vh] sm:min-h-[450px] md:h-[85vh] md:min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background image */}
      <Image
        src={bannerImage || "/placeholder.svg"}
        alt="Career opportunities banner background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Combined gradient and dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E2FF]/40 via-[#014E58]/60 to-black/60 opacity-90" />

      {/* Content Container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center py-8 sm:py-0">
        <div className="w-full md:w-9/12 mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Your Next Career Opportunity, One Click Away!
                </h1>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Whether you're a Registered Nurse, Domestic Cleaner, or in any
                other career, Core Finder AU connects you with the right
                opportunities.
              </p>
              <div className="pt-3 sm:pt-4">
                <button className="bg-[#093056]  text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg transition-colors duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                  Find Your Dream Job
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt="Professional career opportunities illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto rounded-lg "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
