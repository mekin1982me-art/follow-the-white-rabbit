export default function ManifestoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 20px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: "min(820px, 100%)",
          backgroundColor: "#ffffff",
          border: "1px solid #e6e6e6",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          borderRadius: "16px",
          padding: "40px",
          color: "#111",
          lineHeight: 1.7,
        }}
      >
        <div style={{ marginBottom: "18px", opacity: 0.7, letterSpacing: "0.18em", fontSize: 12 }}>
          MANIFESTO
        </div>

        <h1 style={{ margin: 0, fontSize: 34, letterSpacing: "-0.02em" }}>
          Follow the White Rabbit
        </h1>

        <p style={{ marginTop: 14, color: "#333" }}>
          Not everyone will understand. That’s the point.
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "28px 0" }} />

        <p style={{ margin: 0, color: "#222" }}>
          1) Observe carefully.<br />
          2) Question the obvious.<br />
          3) Move quietly, with intent.<br />
          4) Build what you wish existed.<br />
          5) Leave a trace worth following.
        </p>

        <div style={{ marginTop: 34 }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              color: "#111",
              background: "#fafafa",
            }}
          >
            ← Back
          </a>
        </div>
      </div>
    </main>
  );
}
