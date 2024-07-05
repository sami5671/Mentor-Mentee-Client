import { MdPersonSearch } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import Container from "./../../../Shared/Container";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Mission = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const handleHoverStart = (controls) => {
    controls.stop();
  };

  const handleHoverEnd = (controls) => {
    controls.start({
      scale: [1, 1, 1, 1],
      rotate: [0, 5, 5, 0],
      borderRadius: ["10%", "10%", "50%", "10%"],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: 1,
        repeatDelay: 1,
      },
    });
  };

  return (
    <Container>
      <div className="lg:mt-44 mb-12">
        <h1 className="mt-12 text-xl lg:text-5xl font-extrabold bg-gradient-to-tr from-pink-950 to-orange-200 text-transparent bg-clip-text text-center">
          A Quick Look Up How We work
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-12">
          <motion.div
            animate={controls1}
            initial={{
              scale: [1, 1, 1, 1],
              rotate: [0, 0, 0, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 1,
            }}
            onHoverStart={() => handleHoverStart(controls1)}
            onHoverEnd={() => handleHoverEnd(controls1)}
            className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50"
          >
            <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
              <MdPersonSearch />
            </p>
            <h1 className="text-2xl font-semibold mb-4 h-[30px]">
              Find Your Mentor
            </h1>
            <div className="h-[120px]">
              <p className="text-slate-800">
                Find Your Mentor" is a personalized platform matching
                individuals with experienced mentors for guidance, support, and
                professional development
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={controls2}
            initial={{
              scale: [1, 1, 1, 1],
              rotate: [0, 5, 5, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 1,
            }}
            onHoverStart={() => handleHoverStart(controls2)}
            onHoverEnd={() => handleHoverEnd(controls2)}
            className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50"
          >
            <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
              <SiCodementor />
            </p>
            <h1 className="text-2xl font-semibold mb-4">
              Get Personalized Information
            </h1>
            <div className="h-[120px]">
              <p className="text-slate-800">
                "Personalized Information by Mentor" delivers customized
                insights and guidance tailored by experienced mentors to support
                your growth and development.
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={controls3}
            initial={{
              scale: [1, 1, 1, 1],
              rotate: [0, 0, 0, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: 2,
              repeatDelay: 1,
            }}
            onHoverStart={() => handleHoverStart(controls3)}
            onHoverEnd={() => handleHoverEnd(controls3)}
            className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50"
          >
            <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
              <FaUserGraduate />
            </p>
            <h1 className="text-2xl font-semibold mb-4">Reach your Goal</h1>
            <div className="h-[120px]">
              <p className="text-slate-800">
                Reach Your Goal" offers mentor-guided strategies, personalized
                insights, and actionable steps to help you achieve your
                aspirations effectively and efficiently
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
