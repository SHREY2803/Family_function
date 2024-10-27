import React from "react";
import Slider from "react-slick"; // Add this line
import PhotoOne from "../../assets/one.jpg";
import PhotoTwo from "../../assets/two.jpg";
import PhotoThree from "../../assets/four-img.jpg";
import Pic1 from "../../assets/grandfather.jpg"
import Pic2 from "../../assets/img-2.jpg"
import Pic3 from "../../assets/img-3.png"
import NewPic from "../../assets/new_img-1.jpg"
import Pic5 from "../../assets/img-5.jpg"
import Pic6 from "../../assets/img-6.jpg"
import Pic7 from "../../assets/family.jpg"
import NewPic1 from "../../assets/new_img-2.jpg"
import NewPic2 from "../../assets/new_img-3.jpg"
import NewPic3 from "../../assets/new_img-4.jpg"
import NewPic4 from "../../assets/new_img-5.jpg"
import NewPic5 from "../../assets/new_img-6.jpg"
import NewPic6 from "../../assets/new_img-7.jpg"
import NewPic7 from "../../assets/new_img-8.jpg"
import NewPic8 from "../../assets/new_img-9.jpg"
import NewPic9 from "../../assets/new_img-10.jpg"
import NewPic10 from "../../assets/new_img-11.jpg"
import NewPic11 from "../../assets/new_img-12.jpg"
import NewPic12 from "../../assets/new_img-13.jpg"
import NewPic13 from "../../assets/new_img-14.jpg"
import NewPic14 from "../../assets/new_img-15.jpg"
import NewPic15 from "../../assets/new_img-16.jpg"
import NewPic16 from "../../assets/new_img-17.jpg"
import NewPic17 from "../../assets/new_img-18.jpg"
import NewPic18 from "../../assets/new_img-19.jpg"
import NewPic19 from "../../assets/new_img-20.jpg"
import NewPic20 from "../../assets/new_img-21.jpg"
import NewPic21 from "../../assets/new_img-22.jpg"
import NewPic22 from "../../assets/new_img-23.jpg"
import NewPic23 from "../../assets/new_img-24.jpg"
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
    img: NewPic1,
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
    id: 7,
    img: NewPic,
  },
  {
    id: 8,
    img: Pic5,
  },
  {
    id: 9,
    img: Pic6,
  },
  {
    id: 10,
    img: Pic7,
  },
  {
    id: 11,
    img: Pic1,
  },
  {
    id: 12,
    img: NewPic2,
  },
  {
    id: 13,
    img: NewPic3,
  },
  {
    id: 14,
    img: NewPic4,
  },
  {
    id: 15,
    img: NewPic5,
  },
  {
    id: 16,
    img: NewPic6,
  },
  {
    id: 17,
    img: NewPic7,
  },
  {
    id: 18,
    img: NewPic8,
  },
  {
    id: 19,
    img: NewPic9,
  },
  {
    id: 20,
    img: NewPic10,
  },
  {
    id: 21,
    img: NewPic11,
  },
  {
    id: 22,
    img: NewPic12,
  },
  {
    id: 23,
    img: NewPic13,
  },
  {
    id: 24,
    img: NewPic14,
  },
  {
    id: 25,
    img: NewPic15,
  },
  {
    id: 26,
    img: NewPic16,
  },
  {
    id: 27,
    img: NewPic17,
  },
  {
    id: 28,
    img: NewPic18,
  },
  {
    id: 29,
    img: NewPic19,
  },
  {
    id: 30,
    img: NewPic20,
  },
  {
    id: 31,
    img: NewPic21,
  },
  {
    id: 32,
    img: NewPic22,
  },
  {
    id: 33,
    img: NewPic23,
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
