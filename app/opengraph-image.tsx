import { ImageResponse } from "next/og";
import { businessInfo, site } from "@/lib/site";

export const alt = "Indie Bistro — Indian restaurant in Bentleigh, Melbourne";
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
          justifyContent: "space-between",
          background: "#1a1410",
          color: "#f6f1e7",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6 }}>
          {businessInfo.servesCuisine.join(" · ").toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 104, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#c9b896" }}>
            {site.address}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#c9b896" }}>
          {site.phone} · Dine in, takeaway &amp; delivery
        </div>
      </div>
    ),
    size,
  );
}
