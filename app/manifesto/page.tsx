export default function ManifestoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2b2b2b", // koyu füme
        color: "#ff8c00", // turuncu
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 20px",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
      }}
    >
      <div
        style={{
          width: "min(900px, 100%)",
          border: "1px solid rgba(180,0,255,0.35)",
          borderRadius: "18px",
          padding: "36px 28px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          boxShadow: "0 20px 70px rgba(0,0,0,0.55)",
        }}
      >
        <p
          style={{
            letterSpacing: "0.42em",
            fontSize: "12px",
            opacity: 0.85,
            margin: "0 0 18px 0",
            textTransform: "uppercase",
          }}
        >
          BİR FISILTI, BİR ÇIĞLIK DEĞİL
        </p>

        <h1
          style={{
            margin: "0 0 14px 0",
            fontSize: "52px",
            lineHeight: 1.15,
            fontWeight: 700,
            textShadow: "0 0 18px rgba(180,0,255,0.35)",
          }}
        >
          Manifesto
        </h1>

        <p
          style={{
            margin: "0 0 26px 0",
            fontSize: "22px",
            lineHeight: 1.9,
            opacity: 0.95,
          }}
        >
          Herkes anlamayacak. <br />
          Zaten mesele bu.
        </p>

        <div
          style={{
            borderTop: "1px solid rgba(180,0,255,0.25)",
            margin: "18px 0 24px 0",
          }}
        />

        <div
          style={{
            display: "grid",
            gap: "16px",
            fontSize: "16px",
            lineHeight: 1.95,
          }}
        >
          <p style={{ margin: 0 }}>
            Biz, gösterişe değil <strong style={{ color: "#ff8c00" }}>iz</strong>e inanırız.
            Gürültü değil, <strong style={{ color: "#ff8c00" }}>yankı</strong> bırakırız.
          </p>

          <p style={{ margin: 0 }}>
            Burada kimseyi ikna etmiyoruz. <br />
            Sadece doğru yerde duranları <strong style={{ color: "#ff8c00" }}>ayırt</strong> ediyoruz.
          </p>

          <p style={{ margin: 0 }}>
            Hızlı tüketilen hiçbir şey bizi ilgilendirmez. <br />
            Biz, sabırla kurulanı; sessizce büyüyeni seçeriz.
          </p>

          <p style={{ margin: 0 }}>
            Bu bir kulüp değil. Bir “trend” hiç değil. <br />
            Bu, kendini hatırlayanların <strong style={{ color: "#ff8c00" }}>işareti</strong>.
          </p>

          <p style={{ margin: 0 }}>
            Eğer buradaysan, bir şey seni çağırdı demektir. <br />
            O çağrıya kulak verenler, eninde sonunda <strong style={{ color: "#ff8c00" }}>aynı masaya</strong> oturur.
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(180,0,255,0.25)",
            margin: "28px 0 18px 0",
          }}
        />

        <p
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: 700,
            textAlign: "right",
            textShadow: "0 0 18px rgba(180,0,255,0.35)",
          }}
        >
          Yakında görüşeceğiz,Seni takipteyim.
        </p>
      </div>
    </main>
  );
}
