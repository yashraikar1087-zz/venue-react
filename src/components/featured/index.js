import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";

export default function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />

      <div className="artist_name">
        <div className="wrapper">Emin3m</div>
      </div>

      <TimeUntil />
    </div>
  );
}
