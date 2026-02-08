import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#09090b",
          color: "white",
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
          My Memory
        </div>
        <div style={{ marginTop: 20, fontSize: 28, opacity: 0.78, maxWidth: 900 }}>
          Search your notes by meaning — across Apple Notes, Obsidian, Notion, and local files.
        </div>
        <div style={{ marginTop: 34, fontSize: 20, opacity: 0.6 }}>
          github.com/ShubhenduVaid/my-memory
        </div>
      </div>
    ),
    size
  );
}
