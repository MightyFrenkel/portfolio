import { useAudio } from "react-use";
import { Effects } from "./config";

export function useAudioEffect(
  effect: Effects,
  preload: "auto" | "metadata" | "none" = "auto"
) {
  const [audio, state, controls, ref] = useAudio({
    src: `/audio/${effect}.mp3`,
    preload,
  });

  return {
    audioElement: audio,
    state,
    controls,
    ref,
  };
}
