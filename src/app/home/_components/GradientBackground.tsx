"use client";
import { useEffect } from "react";

const GradientBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/vallafederico/glsl-gradient-webflow@master/lib/gradient.02.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <canvas
      id="c"
      data-gradient="wrapper"
      data-multx="10"
      data-multy="0"
      data-hue="180"
      data-brightness=".8"
      data-mouse="-1"
      data-scale="1"
      data-noise="1.5"
      data-time=".2"
      data-bw=".0"
      data-red="0.55"
      data-green="0.00"
      data-blue="0.00"
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default GradientBackground;
