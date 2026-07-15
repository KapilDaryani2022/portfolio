"use client";

import Lottie from "lottie-react";
import robot from "../../../public/lottifiles/robot.json";

export default function RobotAnimation() {
  return <Lottie animationData={robot} loop />;
}