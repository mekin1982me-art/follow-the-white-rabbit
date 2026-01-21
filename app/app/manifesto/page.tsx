export default function ManifestoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "48px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: "820px",
          background: "#ffffff",
          border: "1px solid #e7e7e7",
          borderRadius: "18px",
          padding: "34px 26px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
          color: "#222",
          fontFamily:
            "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          lineHeight: 1.7,
        }}
      >
        <header style={{ marginBottom: "20px" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.28em", opacity: 0.6 }}>
            MANIFESTO
          </div>
          <h1 style={{ margin: "10px 0 0", fontSize: "32px" }}>
            Follow the White Rabbit
          </h1>
          <p style={{ margin: "10px 0 0", opacity: 0.75 }}>
            Not everyone will understand. That’s the point.
          </p>
        </header>

        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "18px 0 26px" }} />

        <section style={{ fontSize: "18px" }}>
          <p>
            This is a signal. A quiet one.
            <br />
            A decision to see what others ignore.
          </p>

          <p>
            We choose clarity over noise.
            <br />
            Curiosity over comfort.
            <br />
            Craft over hype.
          </p>

          <p>
            If you found this page, you’re already closer than most.
          </p>

          <p style={{ marginTop: "28px", fontStyle: "italic", opacity: 0.85 }}>
            — Faldo Device
          </p>
        </section>

        <footer style={{ marginTop: "34px", opacity: 0.6, fontSize: "12px" }}>
          followrabbit.xyz
        </footer>
      </article>
    </main>
  );
}
