import { Roboto, Roboto_Mono } from "next/font/google";

// This flickers on firefox
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export { roboto_mono, roboto };
