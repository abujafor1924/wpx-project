import { PiFacebookLogoBold } from "react-icons/pi";

import { SlSocialPintarest } from "react-icons/sl";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

const Topbar = () => {
  return (
    <div className="container">
      <div className=" flex justify-between bg-base-100 border-b-2 border-slate-200 py-1">
        <div className=" mt-2">
          <p className="ml-6 ">welcome there</p>
        </div>
        <div className="flex">
          <div className="hidden lg:flex mr-4">
            <ul className="menu menu-horizontal px-1">
              <PiFacebookLogoBold className="text-2xl mx-1" />
              <TiSocialInstagramCircular className="text-2xl mx-1" />
              <TiSocialTwitterCircular className="text-2xl mx-1" />
              <SlSocialPintarest className="text-2xl mx-1" />
              <TiSocialLinkedinCircular className="text-2xl mx-1" />
            </ul>
          </div>
          <div className="mt-2 border-l-2 border-slate-200">
            <a className="py-1 ml-6  mr-3 btn-ghost px-8 text-sm bg-[#1D1A1A] rounded-full text-white ">
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
