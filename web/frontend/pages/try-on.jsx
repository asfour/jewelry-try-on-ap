// web/frontend/pages/try-on.jsx
import React from "react";
import "@google/model-viewer";

export default function TryOn() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Virtual Try-On</h1>
      <model-viewer
        src="/models/ring1.glb"
        alt="3D ring model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ios-src="/models/ring1.usdz"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}
