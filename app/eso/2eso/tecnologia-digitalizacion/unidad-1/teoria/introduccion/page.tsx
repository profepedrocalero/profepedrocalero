import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";

export default function IntroduccionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* CABECERA */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-16">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a teoría
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50">
              <Lightbulb className="h-8 w-8 text-cyan-600" />
            </div>

            <p className="text-sm font-extrabold uppercase tracking-wider text-cyan-600">
              Unidad 1 · Teoría · Apartado 1
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Introducción
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Una primera aproximación a la tecnología, sus aplicaciones y su
              relación con las necesidades humanas.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="space-y-8">
          {/* QUÉ ES LA TECNOLOGÍA */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              01 · Para empezar
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              ¿Qué es la tecnología?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              La tecnología forma parte de nuestra vida cotidiana. A través de
              ella las personas desarrollamos productos, herramientas y
              soluciones que nos permiten resolver problemas y satisfacer
              necesidades.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              A lo largo de esta unidad conoceremos cómo se plantea un problema
              tecnológico y cómo se desarrolla un proyecto para buscar una
              solución.
            </p>
          </article>

          {/* TECNOLOGÍA Y VIDA COTIDIANA */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              02 · Tecnología y sociedad
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              La tecnología en nuestra vida
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Desde las herramientas más sencillas hasta los sistemas
              tecnológicos actuales, las personas hemos utilizado la tecnología
              para transformar nuestro entorno y mejorar nuestras condiciones
              de vida.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-extrabold text-slate-950">
                  Resolver problemas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  La tecnología permite buscar soluciones a problemas y
                  necesidades concretas.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-extrabold text-slate-950">
                  Transformar nuestro entorno
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Los productos y sistemas tecnológicos modifican la forma en
                  que vivimos, trabajamos y nos relacionamos.
                </p>
              </div>
            </div>
          </article>

          {/* VÍDEO 1 */}
          <article className="overflow-hidden rounded-3xl border border-cyan-200 bg-cyan-50 shadow-sm">
            <div className="p-8 pb-6 md:p-10 md:pb-7">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
                Recurso audiovisual
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                Vídeo 1 · Qué nos deparará la tecnología en el futuro
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Observa el siguiente vídeo y reflexiona sobre cómo podría
                evolucionar la tecnología y cómo puede influir en nuestra vida
                en el futuro.
              </p>
            </div>

            <div className="px-8 pb-8 md:px-10 md:pb-10">
              <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/dact-1Tdgz0"
                    title="Qué nos deparará la tecnología en el futuro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </article>

          {/* IDEA CLAVE */}
          <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Idea clave
            </p>

            <p className="mt-4 text-2xl font-extrabold leading-9 md:text-3xl">
              La tecnología forma parte de nuestra vida y evoluciona para dar
              respuesta a los problemas y necesidades de las personas.
            </p>
          </article>
        </div>

        {/* NAVEGACIÓN */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria"
            className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Contenidos
          </Link>

          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/tecnologia-necesidades-humanas"
            className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            Siguiente apartado
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}