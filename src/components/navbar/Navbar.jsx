import React from "react";
import { GithubLogo, Logo1 } from "../../assets/images/image";

const Navbar = () => {
  return (
    <div className="bg-[#0B1121] text-white">
      <div className="mx-6 py-8">
        <div className="w-full grid grid-cols-3">
          {/* Alpha Logo */}
          <div className="xl:w-max md:w-14">
            <img src={Logo1} alt="" />
          </div>

          {/* Menu */}
          <div className="flex gap-10 justify-center">
            <div className="font-medium xl:text-xl md:text-sm">
              <a href="">
                <button>Home</button>
              </a>
            </div>
            <div className="font-medium xl:text-xl md:text-sm">
              <a href="">
                <button>About</button>
              </a>
            </div>
            <div className="font-medium xl:text-xl md:text-sm">
              <a href="">
                <button>Portofolio</button>
              </a>
            </div>
          </div>

          {/* Github Logo */}
          <div className="flex justify-end">
            <a href="https://github.com/alifftwa">
              <div className="xl:w-8 md:w-5 sm:w-6">
                <img src={GithubLogo} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
