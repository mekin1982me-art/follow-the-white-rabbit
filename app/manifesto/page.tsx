export default function ManifestoPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "72px 20px",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "min(880px, 100%)",
          position: "relative",
          border: "1px solid rgba(180,0,255,0.45)",
          borderRadius: "24px",
          padding: "56px 28px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          boxShadow: "0 26px 100px rgba(0,0,0,0.7)",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* SUBTLE GRID */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(to right, rgba(180,0,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,0,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.22,
            maskImage:
              "radial-gradient(60% 55% at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 78%)",
            WebkitMaskImage:
              "radial-gradient(60% 55% at 50% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 78%)",
          }}
        />

        {/* TOP-LEFT BACK ARROW */}
        <a
          href="/"
          aria-label="Back"
          style={{
            position: "absolute",
            top: "18px",
            left: "18px",
            width: "30px",
            height: "24px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.92)",
            textDecoration: "none",
            fontSize: "18px",
            lineHeight: 1,
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 0 22px rgba(180,0,255,0.25)",
          }}
        >
          ←
        </a>

        {/* TAG */}
        <p
          style={{
            position: "relative",
            letterSpacing: "0.34em",
            fontSize: "12px",
            opacity: 0.65,
            margin: "0 0 18px 0",
            textTransform: "uppercase",
          }}
        >
          BİR FISILTI, BİR ÇIĞLIK DEĞİL
        </p>

        {/* TITLE */}
        <h1
          style={{
            position: "relative",
            margin: "0 0 26px 0",
            fontSize: "40px",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
        >
          manifesto
        </h1>

        {/* DIVIDER */}
        <div
          style={{
            position: "relative",
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(180,0,255,0.45), transparent)",
            margin: "22px 0 36px 0",
          }}
        />

        {/* MANIFESTO */}
        <div
          style={{
            position: "relative",
            maxWidth: "680px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: 1.9,
            opacity: 0.94,
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <p style={{ margin: 0, fontWeight: 600 }}>
            “Herkes anlamayacak.
            <br />
            Zaten mesele bu.”
          </p>

          <p style={{ margin: 0 }}>
            “Biz gürültüyü seçmedik.
            <br />
            İz bırakmayı seçtik.”
          </p>

          <p style={{ margin: 0 }}>
            “Burada kimse ikna edilmez.
            <br />
            Kimseye bir şey anlatılmaz.”
          </p>

          <p style={{ margin: 0 }}>
            “Bazı şeyler açıklanmaz.
            <br />
            Sadece fark edilir.”
          </p>

          <p style={{ margin: 0 }}>
            “Hızlı olan değil,
            <br />
            doğru olan kalır.”
          </p>

          <p style={{ margin: 0 }}>
            “Bu bir topluluk değil.
            <br />
            Bir kulüp hiç değil.”
          </p>

          <p style={{ margin: 0 }}>
            “Bu, hâlâ kendini duyabilenlerin
            <br />
            birbirini sessizce tanıma hâlidir.”
          </p>

          <p style={{ margin: 0 }}>
            “Eğer buradaysan,
            <br />
            bir şey seni buraya getirdi.”
          </p>

          <p style={{ margin: 0 }}>“Biz ona tesadüf demiyoruz.”</p>

          <p
            style={{
              marginTop: "10px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            “ZAMANI GELDİĞİNDE,
            <br />
            NEYE BAKTIĞINI HATIRLAYACAKSIN.”
          </p>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            position: "relative",
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(180,0,255,0.35), transparent)",
            margin: "40px 0 18px 0",
          }}
        />

        {/* FOOTER */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            fontSize: "8px",
            opacity: 0.55,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>© 2026</span>
            <span>®</span>
            <span>Follow the White Rabbit</span>
          </div>
          <div>ANKARA</div>
        </div>
      </div>
    </main>
  );
}
