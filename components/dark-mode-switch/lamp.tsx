import { Lightbulb } from "../icons/lightbulb";

export interface LampProps {
  toggleLamp: () => void;
  isOn: boolean;
}

export function Lamp({ toggleLamp, isOn }: LampProps) {
  return (
    <button
      style={
        {
          // scale: isOn ? 1.5 : 1.2,
        }
      }
      onClick={toggleLamp}
      className="w-4 h-4"
    >
      <Lightbulb />
    </button>
  );
}
