"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HeroImage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  let screenSize;
  let imageWidth;
  let imageHeight;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width > 1024) {
    screenSize = "desktop";
    imageWidth = 444;
    imageHeight = 720;
  } else if (width > 640) {
    screenSize = "tablet";
    imageWidth = 320;
    imageHeight = 600;
  } else {
    screenSize = "mobile";
    imageWidth = 176;
    imageHeight = 288;
  }

  return (
    <Image
      src={`/images/profile/image-profile-${screenSize}.webp`}
      alt="Alyx DARENNE"
      width={imageWidth}
      height={imageHeight}
      priority
    />
  );
};
export default HeroImage;
