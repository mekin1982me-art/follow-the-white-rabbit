export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),rgba(0,0,0,0.85)_55%,rgba(0,0,0,1)_78%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.10),transparent_55%)]" />

      {/* center content */}
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[11px] tracking-[0.35em] text-white/60">
          A WHISPER, NOT A SHOUT
        </p>

        <h1 className="leading-[0.92]">
          <span className="block text-5xl font-light tracking-tight text-white/90 sm:text-6xl">
            follow the
          </span>
          <span className="mt-2 block text-5xl font-semibold tracking-tight sm:text-6xl">
            white rabbit
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-white/60">
          Not everyone will understand.
          <br />
          That&apos;s the point.
        </p>

        {/* Button: şimdilik bir yere gitmiyor */}
        <button
          type="button"
          className="mt-10 rounded-full border border-white/25 bg-white/5 px-7 py-3 text-[11px] tracking-[0.28em] text-white/85 backdrop-blur transition hover:border-white/45 hover:bg-white/10"
          onClick={() => {
            // Yarın bunu manifesto sayfasına bağlarız.
            // Şimdilik sadece küçük bir “tıklandı” hissi:
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          FOLLOW THE RABBIT
        </button>

        {/* subtle bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
      </div>
    </main>
  );
}
