import { MdPersonSearch } from "react-icons/md";
import { SiCodementor } from "react-icons/si";
import { FaUserGraduate } from "react-icons/fa6";
import Container from "../../Shared/Container";

const Mission = () => {
  return (
    <>
      <Container>
        <div className="lg:mt-56 mb-12">
          <h1 className="mt-12 text-xl lg:text-3xl font-bold">
            A Quick Look Up How We work
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-12">
            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50">
              <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
                <MdPersonSearch />
              </p>
              <h1 className="text-2xl font-semibold mb-4 h-[30px]">
                Find Your Mentor
              </h1>
              <div className="h-[120px]">
                <p className="text-slate-800">
                  Find Your Mentor" is a personalized platform matching
                  individuals with experienced mentors for guidance, support,
                  and professional development
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50">
              <p className="flex justify-center items-center text-teal-600 text-4xl mb-4">
                <SiCodementor />
              </p>
              <h1 className="text-2xl font-semibold mb-4">
                Get Personalized Information
              </h1>
              <div className="h-[120px]">
                <p className="text-slate-800">
                  "Personalized Information by Mentor" delivers customized
                  insights and guidance tailored by experienced mentors to
                  support your growth and development.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-xl px-4 py-4 lg:w-[450px] h-[250px] text-center bg-teal-50">
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Mission;
