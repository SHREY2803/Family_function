import React from "react";
import lastVideo from "../../assets/sample_video.mp4";
import videoImg from "../../assets/video_img.jpg";
import newVideo from "../../assets/updated_video.mp4"
import finalVideo from "../../assets/updated_video.mp4"
import { delay, motion } from "framer-motion"

const VideoImg = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-32">
        <div className="flex flex-col container justify-center items-center">
          <motion.span 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.9,delay:0.5}}
          className="my-10 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent">
            Video
          </motion.span>
          <motion.video
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.9,delay:0.5}}
            className="rounded-md w-full sm:w-3/4 md:w-2/3 xl:w-5/12"
            src={finalVideo}
            loop
            autoPlay
            controls
          ></motion.video>
        </div>
      </div>
    </>
  );
};

export default VideoImg;
