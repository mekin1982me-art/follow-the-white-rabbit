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
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "72px",
          }}
        >
          <img
            src="/logo-temp.png"
            alt="Follow the White Rabbit logo"
            style={{
              width: "140px",
              opacity: 0.95,
              filter: "drop-shadow(0 0 20px rgba(180,0,255,0.4))",
            }}
          />
        </div>

        {/* SLOGAN */}
        <p
          style={{
            letterSpacing: "0.32em",
            fontSize: "12px",
            opacity: 0.6,
            marginBottom: "28px",
          }}
        >
          BİR FISILTI, BİR ÇIĞLIK DEĞİL
        </p>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: "36px",
          }}
        >
          follow the <br />
          <span style={{ fontWeight: 600 }}>white rabbit</span>
        </h1>

        {/* SUBTEXT */}
        <p
          style={{
            fontSize: "18px",
            opacity: 0.8,
            lineHeight: 1.6,
            marginBottom: "56px",
          }}
        >
          Herkes anlamayacak.
          <br />
          Zaten mesele bu.
        </p>

        {/* BUTTON */}
        <a
          href="/manifesto"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.35)",
            color: "#ffffff",
            padding: "16px 44px",
            borderRadius: "48px",
            cursor: "pointer",
            fontSize: "14px",
            letterSpacing: "0.18em",
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
