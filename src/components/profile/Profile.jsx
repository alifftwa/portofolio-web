import React from "react";
import { ImageProfile, WavingHand } from "../../assets/images/image";
import Layout from "../../layouts/Layout";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <div className="w-full  my-48 text-white">
      <div className="mx-10 flex">
        <div className="w-2/5 ml-32 flex items-center">
          <div className="grid gap-2">
            <div className="flex">
              <div className="text-xl text-[#DBFF00] font-semibold mr-2">
                Hello World
              </div>

              <div>
                <div className="w-8">
                  <img src={WavingHand} alt="" />
                </div>
              </div>
            </div>
            <div className="text-4xl font-semibold">
              I'm Alif Fatwa Ramadhani
            </div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-End Engineer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Administrator",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: " 1.75em",
                display: "inline-block",
                fontWeight: "600",
              }}
              repeat={Infinity}
            />
            <div className="text-lg">
              someone who wants to continue learning about new things,
              especially website development.
            </div>
          </div>
        </div>
        <div className="mx-10 grid justify-center">
          <div className="">
            <img src={ImageProfile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
