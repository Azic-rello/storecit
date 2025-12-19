import React from "react";

const Hero = () => {
  return (
    <div className="">
      <img
        className="absolute w-[100%] h-[100vh]"
        src="https://i.pinimg.com/originals/59/44/55/594455ac38f0a40230f18d0a126884dd.jpg"
        alt="salom"
      />
      <div className="relative pt-[340px] pl-[200px]">
        <h1 className="text-[white] text-[50px] font-bold ">
          BOOUST YOUR <br /> BUSINESS WITH <br /> DIGITAL ORDERING
        </h1>
        <p className="text-[white]">
          Guests can use digital menus and custom Qr codes to <br /> Order & Pay
          m pay -at-Table, and ever for Collection & <br /> Delevery.{" "}
        </p>
        <button className="w-[130px] h-[50px] bg-[black] text-[white] mt-[25px] font-medium">
          SIGN UP{" "}
        </button>
        <button className="text-[black] w-[200px] h-[50px] bg-[white] ml-[20px]">
          BOOCK A DEMO{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
