export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-24">

      {/* IZQUIERDA */}

      <div className="flex-1">

        <div className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">

          🚀 Plataforma educativa de Tecnología

        </div>

        <h1 className="mt-8 text-7xl font-black leading-tight">

          Aprende

          <br />

          <span className="text-cyan-400">

            Tecnología

          </span>

          <br />

          creando.

        </h1>

        <p className="mt-10 max-w-xl text-xl leading-9 text-slate-400">

          Recursos gratuitos para Tecnología e Ingeniería,
          TIC, Computación y Robótica en ESO y Bachillerato.

        </p>

        <div className="mt-12 flex gap-6">

          <button className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-cyan-400">

            Explorar recursos

          </button>

          <button className="rounded-xl border border-slate-600 px-8 py-4 text-lg transition hover:border-cyan-400">

            Conóceme

          </button>

        </div>

      </div>

      {/* DERECHA */}

      <div className="hidden flex-1 justify-center lg:flex">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"></div>

          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-2xl">

            <div className="text-center">

              <div className="text-8xl">

                ⚙️

              </div>

              <div className="mt-8 text-2xl font-bold">

                Tecnología

              </div>

              <div className="text-slate-400">

                IA · Python · Arduino

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}