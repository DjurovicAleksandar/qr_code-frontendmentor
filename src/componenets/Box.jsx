import React from "react";
import qrCode from "../assets/images/image-qr-code.png";

function Box() {
  return (
    <div className="bg-containerColor px-4 py-4 rounded-xl">
      <img className="w-52 rounded-xl" src={qrCode} />
      <div className="w-52 text-center my-5">
        <h1 className="md:text-[19px] text-[16px] text-textColor mb-2 leading-[1.3]">
          Improve your front-end skills by building project
        </h1>
        <p className="md:text-[15px] text-[12px] text-pColor">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default Box;
