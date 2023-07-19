"use client";

import { useSelector } from "react-redux";

const Home = () => {
  const { userdata } = useSelector((state) => state?.userdata);
  console.log({ userdata }, "<--");
  return (
    <div className="container-d section-p min-h-screen">
      <h1 className="pb-10 text-xl font-black">Home</h1>
    </div>
  );
};

export default Home;
