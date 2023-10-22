import { PiFacebookLogoBold } from "react-icons/pi";

import { SlSocialPintarest } from "react-icons/sl";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

const FooterNav = () => {
  return (
    <div>
      <div className="navbar bg-base-900 border-y-2 py-10 border-white">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-4xl">Blushlly</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-48">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Categories</a>
            </li>
            <li>
              <a>Makeup</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-5">
          <div className="hidden lg:flex mr-4">
            <ul className="menu menu-horizontal px-1">
              <PiFacebookLogoBold className="text-2xl mx-1" />
              <TiSocialInstagramCircular className="text-2xl mx-1" />
              <TiSocialTwitterCircular className="text-2xl mx-1" />
              <SlSocialPintarest className="text-2xl mx-1" />
              <TiSocialLinkedinCircular className="text-2xl mx-1" />
            </ul>
          </div>
          <p>© 2023 PostX. Designed By WPXPO</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
