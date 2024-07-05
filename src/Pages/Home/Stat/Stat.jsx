import Container from "../../../Shared/Container";
import professional from "../../../assets/images/professional.png";
import general from "../../../assets/images/general.gif";
import student from "../../../assets/images/student.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Stat = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Container>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="mt-24">
          <h1 className="text-center lg:text-5xl font-extrabold bg-gradient-to-tr from-pink-950 to-orange-200 text-transparent bg-clip-text">
            People who are connected
          </h1>
          <p className="mt-6 text-slate-500 lg:px-44 text-center">
            Our survey highlights the engagement levels of various groups in
            career guidance and counseling. With over 4,200 professionals, 31+
            students, and 1,200 general participants, this data will help us
            understand their needs and develop better resources to support
            informed career decisions. Thank you for your valuable insights and
            participation!
          </p>
        </div>
        <section className="mt-12 flex items-center justify-center">
          <div className="stats stats-vertical lg:stats-horizontal shadow-lg lg:w-[700px]">
            <div className="stat">
              <div className="text-slate-600 font-semibold">
                <div>Students</div>
                <div>
                  <img src={student} className="w-[40px]" alt="" />
                </div>
              </div>
              <div className="stat-value text-cyan-600">
                {counterOn && (
                  <CountUp start={0} end={31} duration={3} delay={0} />
                )}
                <span>+</span>
              </div>
            </div>
            <div className="stat">
              <div className="text-slate-600 font-semibold">
                <div>Professionals</div>
                <div>
                  <img src={professional} className="w-[40px]" alt="" />
                </div>
              </div>
              <div className="stat-value text-cyan-600">
                {counterOn && (
                  <CountUp start={0} end={50} duration={3} delay={0} />
                )}
                <span>+</span>
              </div>
            </div>
            <div className="stat">
              <div className="text-slate-600 font-semibold">
                <div>General</div>
                <div>
                  <img src={general} className="w-[40px]" alt="" />
                </div>
              </div>
              <div className="stat-value text-cyan-600">
                {counterOn && (
                  <CountUp start={0} end={1200} duration={3} delay={0} />
                )}
                <span>+</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </Container>
  );
};

export default Stat;
