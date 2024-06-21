import Container from "../Container";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white z-10">
      <div className="py-1 shadow-xl shadow-cyan-100">
        <Container>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-slate-100 rounded-lg w-[200px]  font-semibold"
                >
                  <li>
                    <a>Mentors</a>
                  </li>
                  <li>
                    <a>Success stories</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-tr from-black to-yellow-600 text-transparent bg-clip-text font-bold">
                I Could Be
              </button>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold text-[15px]">
                <li>
                  <a>Mentors</a>
                </li>
                <li>
                  <a>Success stories</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="flex gap-2 items-center font-semibold border-2 border-slate-400 border-dotted px-2 py-1 hover:bg-black hover:text-slate-100 rounded-md">
                Login <FaUser />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
