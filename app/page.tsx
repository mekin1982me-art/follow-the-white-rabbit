export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <p
          style={{
            letterSpacing: "0.3em",
            fontSize: "12px",
            opacity: 0.6,
            marginBottom: "24px",
          }}
        >
          A WHISPER, NOT A SHOUT
        </p>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: "32px",
          }}
        >
          follow the <br />
          <span style={{ fontWeight: 600 }}>white rabbit</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: "48px",
          }}
        >
          Not everyone will understand.  
          <br />
          That’s the point.
        </p>

        <a
          href="/manifesto"
          style={{
           backgroundColor: "transparent",
           border: "1px solid rgba(255,255,255,0.4)",
           color: "#ffffff",
           padding: "14px 36px",
           borderRadius: "40px",
           cursor: "pointer",
           fontSize: "14px",
           letterSpacing: "0.15em",
           display: "inline-block",
          textDecoration: "none",
          userSelect: "none",
  }}
>
  FOLLOW THE RABBIT
</a>

      </div>
    </main>
  );
}
