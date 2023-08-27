/* eslint-disable react/no-unescaped-entities */
import { Section } from "@/components/section";
import { Text } from "@/components/text";

export default function AboutPage() {
  return (
    <Section>
      <Text.p>
        Hey there! I'm Frank Hartman, a senior front-end developer. I've got a
        knack for crafting user-friendly and visually appealing web experiences
        that hit the mark.
      </Text.p>
      <br />
      <Text.p>
        I come from a background in game technology, where I spent a lot of time
        diving into the world of VR and 3D engines like Unity and Unreal Engine.
        It was a blast experimenting with virtual environments and pushing the
        boundaries of what's possible.
      </Text.p>
      <br />
      <Text.p>
        For the past few years, I've been focusing on front-end web development.
        Why? Well, I realized that by creating smooth and engaging online
        interfaces, I can reach a wider audience and make their online journeys
        better.
      </Text.p>
    </Section>
  );
}
