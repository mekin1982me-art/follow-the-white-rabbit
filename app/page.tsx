export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Follow the White Rabbit
      </h1>

      <p style={{ fontSize: "18px", maxWidth: "500px", opacity: 0.8 }}>
        This is not a brand.
        <br />
        This is a whisper.
        <br />
        A choice.
      </p>

      <div
        style={{
          marginTop: "40px",
          fontSize: "14px",
          letterSpacing: "2px",
          opacity: 0.6,
        }}
      >
        ENTER
      </div>
    </main>
  );
}
