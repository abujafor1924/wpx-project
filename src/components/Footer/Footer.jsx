import { BsSearch } from "react-icons/bs";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <div className="bg-[#1D1A1A]">
      <div className="container py-10 text-[#FFFFFF] ">
        <div className="grid grid-cols-3 gap-4 ">
          <div>
            <h1 className="text-2xl font-bold">Category </h1>

            <div className="w-[80%]">
              <p className="my-3 text-xl font-semibold flex justify-between">
                Beauty <span>(4)</span>
              </p>
              <p className="bg-white h-1"></p>
            </div>
            <div className="w-[80%]">
              <p className="my-3 text-xl font-semibold flex justify-between">
                Fashion <span>(8)</span>
              </p>
              <p className="bg-white h-1"></p>
            </div>
            <div className="w-[80%]">
              <p className="my-3 text-xl font-semibold flex justify-between">
                Makeup <span>(6)</span>
              </p>
              <p className="bg-white h-1"></p>
            </div>
            <div className="w-[80%]">
              <p className="my-3 text-xl font-semibold flex justify-between">
                Body <span>(2)</span>
              </p>
              <p className="bg-white h-1"></p>
            </div>
            <div className="w-[80%]">
              <p className="my-3 text-xl font-semibold flex justify-between">
                Lifestyle <span>(7)</span>
              </p>
              <p className="bg-white h-1"></p>
            </div>
            <div className="my-10 relative">
              <input
                type="text"
                placeholder="Search"
                className="input w-full max-w-xs bg-[#535353]"
              />
              <BsSearch className="absolute -mt-8 ml-[68%] text-2xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Populer post</h1>
            <div className="flex w-[80%] my-8">
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
                className="w-[100px] h-[90px] mr-3"
              />
              <div>
                <h1 className=" font-bold mb-4">
                  Vivamus placerat Luctus Neque nec Faucibus
                </h1>
                <p className="text-[#CFCFCF]">7 Days ago</p>
              </div>
            </div>
            <div className="flex w-[80%] my-8">
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
                className="w-[100px] h-[90px] mr-3"
              />
              <div>
                <h1 className=" font-bold mb-4">
                  Vivamus placerat Luctus Neque nec Faucibus
                </h1>
                <p className="text-[#CFCFCF]">7 Days ago</p>
              </div>
            </div>
            <div className="flex w-[80%] my-8">
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
                className="w-[100px] h-[90px] mr-3"
              />
              <div>
                <h1 className=" font-bold mb-4">
                  Vivamus placerat Luctus Neque nec Faucibus
                </h1>
                <p className="text-[#CFCFCF]">7 Days ago</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Galery</h1>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold my-6">TAGS</h1>
              <div className="grid grid-cols-4 gap-4">
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
                <p className="bg-[#535353] rounded-full px-4 py-1 text-center">
                  Beauty
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterNav />
      </div>
    </div>
  );
};

export default Footer;
