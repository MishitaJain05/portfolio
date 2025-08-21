import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative w-full py-20 overflow-hidden" id="skills">
      <div className="absolute left-0 bottom-0 top-[28%] w-[40vw] h-auto z-[-10] opacity-40 pointer-events-none bg-no-repeat bg-cover" />
      <div className="bg-[#151515] rounded-[48px] text-center px-4 sm:px-8 py-16 mx-auto w-full max-w-none relative z-10">
        <h2 className="text-4xl sm:text-[45px] font-bold text-white mb-6">
          Skills
        </h2>
        <p className="text-[#B8B8B8] text-lg sm:text-[18px] tracking-wide leading-[1.5em] mb-12 px-7">
          Proficient in Web Development, Software Development, and Data Science
          with a proven ability to design, develop, and optimize robust
          applications. Skilled in translating complex requirements into
          efficient, scalable solutions.
        </p>
        <div className="w-full sm:w-[90%] mx-auto">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="skill-slider"
            containerClass="w-full"
            itemClass="px-2 sm:px-4"
          >
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 mx-2">
              <img
                src={meter1}
                alt="Web Development"
                className="w-1/2 mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold text-white">
                Web Development
              </h5>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 mx-2">
              <img
                src={meter2}
                alt="Data Science"
                className="w-1/2 mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold text-white">Data Science</h5>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 mx-2">
              <img
                src={meter3}
                alt="Software Developer"
                className="w-1/2 mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold text-white">
                Software Developer
              </h5>
            </div>
            {/* <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 mx-2">
              <img
                src={meter1}
                alt="Web Development"
                className="w-1/2 mx-auto mb-4"
              />
              <h5 className="text-xl font-semibold text-white">
                Web Development
              </h5>
            </div> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
