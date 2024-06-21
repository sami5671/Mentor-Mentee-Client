import { FaArrowRight } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerVideo from "../../assets/Video/video.mp4";
import Container from "../../Shared/Container";
import RegisterButton from "../../Components/RegisterButton/RegisterButton";
import CountDown from "../../Components/Counter/CountDown";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Coming Soon", "I COULD BE", "Opening in 1st, July"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container>
        <div className="relative">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl lg:text-8xl font-bold mt-16 lg:mt-28">
              <span className="bg-gradient-to-tr from-black to-cyan-500 text-transparent bg-clip-text">
                Let's build
              </span>
              <span className="bg-gradient-to-tr from-black to-yellow-600 text-transparent bg-clip-text ml-1 lg:ml-4">
                the future
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-base sm:text-lg px-2 md:text-xl lg:text-3xl text-yellow-800 font-bold mt-6">
              {text}
              <Cursor cursorBlinking="false" cursorStyle=".." />
            </p>
          </div>

          <div className="lg:text-center mt-6 lg:mt-12 lg:text-xl font-semibold">
            <p className="hidden lg:block">
              Mentoring can be both simple and life-changing. <br />
              Let's start your journey and compete with the world.
            </p>
            <p className="lg:hidden block">
              Mentoring can be both simple and life-changing. Let's start your
              journey and compete with the world.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <CountDown />
          </div>

          <div className="flex items-center justify-center mt-12 gap-6">
            <button className="flex items-center gap-2 shadow-xl hover:border-2 px-4 py-2 hover:border-dotted hover:border-slate-500 rounded-full">
              Learn more <FaArrowRight />
            </button>
            <RegisterButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
