import { ImageResponse } from "next/og";

export const alt = "Krishna Kishore Chakraborty — AI and software portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "72px", color: "#f4f3ff", background: "radial-gradient(circle at 85% 25%, rgba(44,176,198,.24), transparent 28%), radial-gradient(circle at 55% 110%, rgba(126,88,221,.35), transparent 42%), linear-gradient(135deg,#080b18,#11142a 58%,#090d1b)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: 700, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#a6a8c7", fontSize: 20, letterSpacing: 5 }}><span style={{ display: "flex", width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: 13, border: "1px solid rgba(180,170,255,.45)", color: "#d3c7ff", fontSize: 22, letterSpacing: -2 }}>K<span style={{ color: "#72e7ef" }}>.</span></span> PORTFOLIO / 2026</div>
        <div style={{ display: "flex", marginTop: 58, fontSize: 62, fontWeight: 700, letterSpacing: -3, lineHeight: 1.08 }}>Krishna Kishore<br/>Chakraborty</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 25, color: "#b5b7d2" }}>Thoughtful software for an intelligent future.</div>
        <div style={{ display: "flex", gap: 10, marginTop: 38 }}><span style={{ display: "flex", border: "1px solid rgba(186,181,255,.25)", borderRadius: 99, padding: "8px 16px", color: "#cec8f8", fontSize: 16 }}>AI / ML</span><span style={{ display: "flex", border: "1px solid rgba(114,231,239,.25)", borderRadius: 99, padding: "8px 16px", color: "#91e6ec", fontSize: 16 }}>SOFTWARE</span><span style={{ display: "flex", border: "1px solid rgba(186,181,255,.25)", borderRadius: 99, padding: "8px 16px", color: "#cec8f8", fontSize: 16 }}>PRODUCT IDEAS</span></div>
      </div>
      <div style={{ width: 300, height: 300, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 150, border: "1px solid rgba(167,160,255,.25)", background: "radial-gradient(circle,rgba(124,106,255,.2),rgba(16,24,48,.4) 65%,transparent 70%)", transform: "rotate(-16deg)" }}><div style={{ width: 210, height: 110, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", border: "1px solid rgba(114,231,239,.48)", color: "#e2dcff", fontSize: 82, fontWeight: 650, letterSpacing: -10, transform: "rotate(16deg)" }}>KK</div></div>
    </div>, size,
  );
}
