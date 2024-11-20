import React from "react";
import IMAGES from "@/assets/images";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={IMAGES.KCLAGOS}
      alt="stargate-logo"
      width={40}
      height={40}
      className="size-8"
    />
  );
};

export default Logo;
