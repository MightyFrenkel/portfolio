"use client";

import { useAudioEffect } from "@/hooks/use-audio-effect/use-audio-effect";
import { ThemeContext } from "../theme-provider";
import { useContext } from "react";
import { Handle } from "./handle";
import { Lamp } from "./lamp";

export function DarkModeSwitch() {
  const { controls, audioElement } = useAudioEffect("switch");
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  function toggleLamp() {
    toggleDarkMode();
    controls.play();
  }

  return (
    <div className="relative z-10">
      <Lamp toggleLamp={toggleLamp} isOn={isDarkMode} />
      <Handle toggleLamp={toggleLamp} />
      {audioElement}
    </div>
  );
}
