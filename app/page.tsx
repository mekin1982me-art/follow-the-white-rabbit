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
        padding: "40px 18px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "720px", width: "100%" }}>
        {/* LOGO */}
        <div style={{ marginBottom: "26px" }}>
          <img
            src="/logo-tr-temp.png"
            alt="Follow the White Rabbit Logo"
            style={{
              width: "clamp(180px, 30vw, 280px)", // LOGO BOYUTU (küçük değil)
              height: "auto",
              display: "block",
              margin: "0 auto",
              // Mor ışığı KAPAT
              filter: "none",
            }}
          />
        </div>

        <p
          style={{
            letterSpacing: "0.3em",
            fontSize: "12px",
            opacity: 0.6,
            marginBottom: "24px",
          }}
        >
          BİR FISILTI, BİR ÇIĞLIK DEĞİL
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
          Herkes anlamayacak.
          <br />
          Zaten mesele bu.
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
