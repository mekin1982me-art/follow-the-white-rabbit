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
        <div style={{ letterSpacing: "0.18em", fontSize: 12, opacity: 0.65 }}>
          MANIFESTO
        </div>

        <h1 style={{ marginTop: 14, marginBottom: 18, fontSize: 34 }}>
          Follow the White Rabbit
        </h1>

        <p style={{ margin: 0, fontSize: 18, opacity: 0.9 }}>
          Not everyone will understand.
          <br />
          That’s the point.
        </p>

        <hr style={{ margin: "28px 0", border: "none", borderTop: "1px solid rgba(0,0,0,0.12)" }} />

        <p style={{ margin: 0, fontSize: 16 }}>
          Buraya yarın gerçek manifesto metnini koyacağız.
          Şimdilik çalıştığını göstermek için bu metin yeterli.
        </p>
      </div>
    </main>
  );
}
