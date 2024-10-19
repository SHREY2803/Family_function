import React from "react";
import Slider from "react-slick"; // Add this line
import PhotoOne from "../../assets/one.jpg";
import PhotoTwo from "../../assets/two.jpg";
import PhotoThree from "../../assets/four-img.jpg";
import Pic1 from "../../assets/grandfather.jpg"
import Pic2 from "../../assets/img-2.jpg"
import Pic3 from "../../assets/img-3.png"
import Pic4 from "../../assets/img-4.png"
import Pic5 from "../../assets/img-5.jpg"
import Pic6 from "../../assets/img-6.jpg"
import Pic7 from "../../assets/family.jpg"
import { delay, motion } from "framer-motion"

const testimonialData = [
  {
    id: 1,
    img: PhotoOne,
  },
  {
    id: 2,
    img: PhotoTwo,
  },
  {
    id: 3,
    img: PhotoThree,
  },
  {
    id: 4,
    img: Pic1,
  },
  {
    id: 5,
    img: Pic2,
  },
  {
    id: 6,
    img: Pic3,
  },
  {
    id: 10,
    img: Pic7,
  },
];

const   PhotoSlider = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.span 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.9,delay:0.5}}
      
      className="flex  bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent text-center justify-center my-6">
          Photo Gallery
        </motion.span>

      <motion.div 
        className="slider-container">
        <Slider {...settings}>
          {testimonialData.map((data) => {
            const imgClass =
              data.id === 10 // Targeting the specific image with id 10
                ? "block mx-auto w-full sm:max-w-[700px] md:max-w-[800px] lg:max-w-[800px]"

                : "block mx-auto w-full sm:max-w-[250px] md:max-w-[280px] lg:max-w-[300px]"; // Default size

            return (
              <div key={data.id} className="my-6 flex justify-center">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <img className={imgClass} src={data.img} alt="" />
                  {/* Optionally, you can add text and name to the data if needed */}
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                </div>
              </div>
            );
          })}
        </Slider>
      </motion.div>
    </div>
  );
};

export default PhotoSlider;
