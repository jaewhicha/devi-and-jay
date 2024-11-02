import type { Metadata } from "next";
import { HomeHero } from "ui";

export const metadata: Metadata = {
  title: "Devi & Jay",
  description: "Welcome to our website",
};
export default function Web() {
  return (
    <>
      {/* <HomeHero /> */}
      <section><h3>Page content goes here</h3></section>
    </>
  );
}
