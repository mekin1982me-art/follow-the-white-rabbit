export default function ManifestoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        color: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily:
          'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      }}
    >
      <div
        style={{
          width: "min(820px, 100%)",
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: "16px",
          padding: "42px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          lineHeight: 1.8,
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.22em", opacity: 0.65 }}>
            MANIFESTO
          </div>
          <h1 style={{ margin: "8px 0 0", fontSize: "34px", letterSpacing: "-0.02em" }}>
            Follow the White Rabbit
          </h1>
        </div>

        <p style={{ margin: "18px 0" }}>
          Not everyone will understand. <br />
          That&apos;s the point.
        </p>

        <p style={{ margin: "18px 0" }}>
          We move quietly. We build carefully. We don&apos;t ask for permission.
          We choose clarity over noise, craft over hype, and truth over comfort.
        </p>

        <p style={{ margin: "18px 0" }}>
          If you&apos;re here, you already felt it: <strong>there is more</strong>.
          Keep going.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "22px",
            padding: "12px 18px",
            borderRadius: "12px",
            border: "1px solid rgba(0,0,0,0.18)",
            textDecoration: "none",
            color: "#111",
            fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
            fontSize: "14px",
          }}
        >
          ← Back
        </a>
      </div>
    </main>
  );
}
