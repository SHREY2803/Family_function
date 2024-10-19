import React from "react";
import ProfilePic from "../../assets/three.jpg";
import MoonImg from "../../assets/one_moon-1.png";
import { delay, motion } from "framer-motion"

const container = (delay)=>({
  whileInView:{opacity:1,x:0},
  hidden:{ x: -100, opacity:0 },
  visible: { 
    x: 0, 
    opacity:1,
    transition:{duration:0.5, delay:delay},
  }
  
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start relative">
            <div className="flex flex-wrap">
              <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mt-4 pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
              श्री दिगंबरराव सदाशिवराव कुलकर्णी
              </motion.h1>
            </div>
            <motion.img
              initial={{y:-100,opacity:0}}
              animate = {{y:0,opacity:1}}
              transition={{duration:1, delay:1.2}}
              src={MoonImg}
              alt=""
              className="block lg:absolute lg:right-0 lg:top-1/3 lg:translate-x-1/2 lg:-translate-y-1/2 max-w-[300px] sm:max-w-[250px] md:max-w-[270px] ml-4 -mt-5"
            />
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="mb-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              प्रस्तावना
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-xl py-1 font-light tracking-tighter text-xl mt-3">
              आमच्या प्रिय आजोबांना सादर अभिवादन!
            </motion.p>
            <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible" 
            className="max-w-xl py-6 font-light tracking-tighter text-lg">
              आपल्या ८९ वर्षांच्या प्रदीर्घ जीवनाचा आणि यशस्वी प्रवासाचा आनंद
              साजरा करताना आम्हाला अपार आनंद होत आहे. आपली सेवा, अनुभव आणि
              मार्गदर्शनामुळे, आपल्यासारख्या प्रिय व्यक्तीची साथ आम्हाला लाभली
              याचा आम्हाला अभिमान आहे. आपल्या कष्टांमुळे आणि मेहनतीमुळे
              संपूर्ण कुटुंबाला प्रेरणा मिळाली आहे. आपले आरोग्य उत्तम राहो आणि
              पुढील अनेक वर्षे आपल्याबरोबर आनंदात जाऔ हीच ईश्वर चरणी प्रार्थना.
              आपल्याला समृद्ध जीवनाच्या प्रवासासाठी
              मनःपूर्वक अभिवादन.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate = {{x:0,opacity:1}}
              transition={{duration:1, delay:1.2}}
              src={ProfilePic}
              alt="main image"
              className="rounded-xl max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
