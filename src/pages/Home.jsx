import React from "react";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/profile/Profile";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0B1121]">
        <Layout>
          <Navbar />
          <Profile />
        </Layout>
      </div>
    </>
  );
};

export default Home;
