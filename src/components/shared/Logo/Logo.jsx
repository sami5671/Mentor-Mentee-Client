import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image width={80} height={70} src="/logo.jpeg" alt="logo" />
    </div>
  );
};

export default Logo;
