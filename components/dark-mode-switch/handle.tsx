import { useAudioEffect } from "@/hooks/use-audio-effect/use-audio-effect";
import { PanInfo, distance2D, motion } from "framer-motion";
import { useRef } from "react";

export interface HandleProps {
  toggleLamp: () => void;
}

export function Handle({ toggleLamp }: HandleProps) {
  const canActivate = useRef(true);

  const { controls, audioElement } = useAudioEffect("pop");

  function onDrag(_: MouseEvent, info: PanInfo) {
    const distance = distance2D({ x: 0, y: 0 }, info.offset);
    if (distance > 100 && canActivate.current) {
      canActivate.current = false;

      toggleLamp();
    }

    if (distance < 80 && !canActivate.current) {
      canActivate.current = true;
    }
  }

  function onDragStart() {
    controls.play();
  }
  function onDragEnd() {
    canActivate.current = true;
  }
  return (
    <>
      {audioElement}
      <motion.div
        drag
        onDrag={onDrag}
        onTapStart={onDragStart}
        onDragEnd={onDragEnd}
        className="absolute left-0 w-8 h-8 rounded-full cursor-pointer border-4 shadow-lg border-yellow-700 bg-black/10"
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.2 }}
        dragSnapToOrigin
        dragConstraints={{
          left: -10,
          right: 10,
          top: 10,
          bottom: 100,
        }}
      />
    </>
  );
}
