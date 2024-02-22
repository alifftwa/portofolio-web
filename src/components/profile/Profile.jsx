import React from "react";
import { ImageProfile, WavingHand } from "../../assets/images/image";
import Layout from "../../layouts/Layout";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <div className="w-full my-48 text-white flex justify-center">
      <div className="flex justify-center md:flex-row sm:flex-col flex-col">
        {/* Profile Image */}
        <div className="flex justify-center xl:w-full md:mx-0 md:w-60">
          <div className="">
            <img src={ImageProfile} alt="" />
          </div>
        </div>

        {/* Description Profile */}
        <div className="w-2/5 flex items-center xl:ml-0 xl:w-full md:ml-10">
          <div className="grid gap-2">
            <div className="flex">
              <div className=" text-[#DBFF00] font-semibold mr-2 xl:text-xl md:text-xs">
                Hello World
              </div>

              <div>
                <div className="xl:w-8 md:w-4">
                  <img src={WavingHand} alt="" />
                </div>
              </div>
            </div>
            <div className="font-semibold xl:text-4xl md:text-xl">
              I'm Alif Fatwa Ramadhani
            </div>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Front-End Engineer",
                1000,
                "Web Administrator",
                1000,
              ]}
              className="xl:text-3xl"
              wrapper="span"
              speed={50}
              style={{
                // fontSize: "1.25em",
                display: "inline-block",
                fontWeight: "600",
              }}
              repeat={Infinity}
            />
            <div className="xl:text-lg md:text-sm">
              someone who wants to continue learning about new things,
              especially website development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
