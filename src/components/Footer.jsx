import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-600">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FacebookOutlinedIcon />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LinkedInIcon />
              </button>
              <button
                className="bg-white text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <WhatsAppIcon />
              </button>
              <button
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <GitHubIcon />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto sm:w-1/2">
                <span className="block uppercase text-gray-500 text-sm font-bold mb-2">
                  Useful Links
                </span>
                <ul>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Free Products
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 sm:w-1/2">
                <span className="block uppercase text-gray-500 text-sm font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      to=""
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              <span className="text-gray-500 hover:text-gray-800">
                Copyright© 2023 XStore Creative ITIians
              </span>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
