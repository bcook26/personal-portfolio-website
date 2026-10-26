import { ImageResponse } from "next/og";

export const alt = "Bryce Cook – Data Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>Bryce Cook</div>
        <div style={{ fontSize: 48, marginTop: 16, color: "#93c5fd" }}>
          Data Engineer
        </div>
        <div style={{ fontSize: 32, marginTop: 40, color: "#a3a3a3" }}>
          Python · SQL · Airflow · ETL · Azure
        </div>
        <div style={{ fontSize: 32, marginTop: 12, color: "#a3a3a3" }}>
          Remote · open to relocating
        </div>
      </div>
    ),
    size
  );
}
