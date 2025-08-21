import { useState, useEffect } from "react";
import headerImg from "../assets/images/header-img.svg";
import bannerBg from "../assets/images/banner4.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Software Developer", "Data Scientist"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className="banner relative mt-0 pt-[260px] pb-[100px] bg-top bg-cover bg-no-repeat w-full rounded-[48px]"
      id="home"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center rounded-lg">
        <div className="w-full md:w-7/12 xl:w-7/12 flex flex-col justify-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="font-bold tracking-wide px-2.5 py-2 inline-block mb-4 text-[20px] bg-gradient-to-r from-[#aa367c80] to-[#4a2fbd80] border border-white/50 rounded-lg">
                  Welcome to my Portfolio
                </span>
                <h1 className="text-[65px] font-bold tracking-wide leading-none mb-5 block text-white">
                  {`Hi! I'm Mishita Jain `}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap border-r-[1.5px] border-[#666]">
                      {text}
                    </span>
                  </span>
                </h1>
                <p className="text-[#B8B8B8] text-[18px] tracking-wide leading-[1.5em] w-[96%] mb-0">
                  I am a passionate developer with a strong foundation in
                  various skills. I specialize in building efficient,
                  user-focused solutions that combine latest technologies with
                  ease of use.
                </p>
                <a href="#contact">
                  <button className="ml-3 px-5 py-2 mt-8 font-medium text-white bg-transparent border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300">
                    Let's Connect
                  </button>
                </a>
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className="w-full md:w-5/12 xl:w-5/12 flex justify-center mt-12 md:mt-0">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img
                  src={headerImg}
                  alt="Header Img"
                  className="w-[350px] animate-updown"
                  style={{
                    animation: "updown 3s linear infinite",
                  }}
                />
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
      <style>
        {`
          @keyframes updown {
            0% { transform: translateY(-20px);}
            50% { transform: translateY(20px);}
            100% { transform: translateY(-20px);}
          }
          .animate-updown {
            animation: updown 3s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
