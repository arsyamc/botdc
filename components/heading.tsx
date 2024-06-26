import React from "react";
import { subtitle, title, rainbowText } from "./primitives";

export default function Heading() {
  return (
    <div className="inline-block max-w-lg text-center justify-center">
      <h1 className={`${title()} ${rainbowText}`}>Check Oshi&nbsp;</h1>
      <h1 className={`${title({ color: "violet" })} ${rainbowText}`}>Online</h1>
      <p className={subtitle({ class: "mt-2 text-base" })}>
        Cek Oshi seseorang melalui nama
      </p>
    </div>
  );
}
