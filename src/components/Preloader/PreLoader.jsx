import { useLayoutEffect, useRef } from "react";
import BgImg from "../../assets/bg-pro.jpg";
import React from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import colorBg from "../../assets/bg_img_3.jpg";

function PreLoader() {
  const comp = useRef(null);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#flower-1","#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.8,
          duration: 1.2,
        })
        .to(["#flower-1","#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 1.8,
          stagger: 0.8,
          duration: 1.2,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.8,
        })
        .to("#welcome", {
          opacity: 0,
          duration: 0.8,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .to("#welcome", {
          opacity: 1,
          duration: 1.8,
          onComplete: () => {
            // Navigate to FrontPage.jsx after the animation completes
            setTimeout(() => {
              navigate("FrontPage"); // Use the correct path for your FrontPage component
            }, 1000); // Optional delay before navigating
          },
        });
    }, comp);

    return () => ctx.revert();
  }, [navigate]); // Add navigate to the dependency array

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="text-rose-800 absolute font-bold h-screen w-full flex flex-col gap-12 sm:gap-4 md:gap-10 tracking-tight p-3 sm:p-5 md:p-10 top-0 left-0 font-spaceGrostesk z-10 "
          style={{
            backgroundImage: `url(${BgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-52 flex flex-col gap-8 justify-center text-center lg:mt-9">
            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
              id="flower-1"
            >
              💐💐💐💐
            </h1>
            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
              id="title-1"
            >
              कुलकर्णी परिवार
            </h1>
            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
              id="title-2"
            >
              आपले
            </h1>
            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
              id="title-3"
            >
              स्वागत करतो
            </h1>
            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
              id="flower-1"
            >
              💐💐💐💐
            </h1>
          </div>
        </div>
        <div
          className="flex flex-col gap-5 sm:gap-8 md:gap-10 h-screen justify-center items-center"
          style={{
            backgroundImage: `url(${colorBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            id="welcome"
            className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-red-700 font-spaceGrostesk flex items-center justify-center text-center px-3 sm:px-5"
          >
            || सहस्त्रचंद्र दर्शन सोहळ्यासाठी ||
          </h1>
        </div>
      </div>
    </>
  );
}

export default PreLoader;
