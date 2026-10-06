import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Users,
  Wrench,
} from "lucide-react";

export default function TecnologiaNecesidadesHumanasPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* CABECERA */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
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
              Unidad 1 · Teoría · Apartado 2
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              La tecnología como respuesta a las necesidades humanas
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Comprende por qué surge la actividad tecnológica y cómo la
              tecnología permite satisfacer las necesidades humanas y resolver
              problemas de la vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="space-y-8">
          {/* 1. ORIGEN DE LA ACTIVIDAD TECNOLÓGICA */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                <Users className="h-6 w-6 text-cyan-600" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                  01 · Origen
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                  La actividad tecnológica
                </h2>
              </div>
            </div>

            <p className="mt-7 leading-8 text-slate-600">
              La actividad tecnológica surgió prácticamente al mismo tiempo
              que el ser humano. Desde sus orígenes, las personas han
              desarrollado soluciones para responder a sus necesidades más
              básicas y facilitar su supervivencia.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-slate-950">Alimento</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Una de las necesidades básicas relacionadas con la
                  supervivencia.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-slate-950">Cobijo</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  La necesidad de disponer de protección y un lugar donde
                  refugiarse.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-bold text-slate-950">Ropa</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Una necesidad relacionada con la protección del cuerpo.
                </p>
              </div>
            </div>
          </article>

          {/* 2. CIENCIA, TÉCNICA Y TECNOLOGÍA */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                <BookOpen className="h-6 w-6 text-cyan-600" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                  02 · Conceptos fundamentales
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                  Ciencia, técnica y tecnología
                </h2>
              </div>
            </div>

            <p className="mt-7 leading-8 text-slate-600">
              Para comprender qué es la tecnología, es importante diferenciar
              tres conceptos relacionados: ciencia, técnica y tecnología.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl">🔬</div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  Ciencia
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Conjunto de conocimientos que tiene el ser humano sobre el
                  mundo y la naturaleza.
                </p>

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Ejemplos: Biología, Física, Medicina y Genética.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl">🛠️</div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  Técnica
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Habilidades o destrezas, todo aquello que sabemos hacer.
                </p>

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Ejemplos: construir un puente, arar un campo, unir piezas de
                  madera o soldar piezas metálicas.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                <div className="text-3xl">💡</div>

                <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                  Tecnología
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Conjunto de conocimientos y técnicas que se emplean para
                  satisfacer las necesidades humanas y resolver problemas que
                  se presentan en nuestra vida diaria.
                </p>
              </div>
            </div>
          </article>

          {/* 3. EL TECNÓLOGO */}
          <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Wrench className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  03 · El tecnólogo
                </p>

                <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                  ¿Qué hace un tecnólogo?
                </h2>
              </div>
            </div>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">
              La labor de un tecnólogo será inventar, diseñar y construir
              productos tecnológicos, o modificar algunos ya inventados, para
              dar respuesta a las necesidades planteadas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="font-bold text-white">Inventar</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Crear nuevas soluciones tecnológicas.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="font-bold text-white">Diseñar</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Planificar soluciones para responder a una necesidad.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="font-bold text-white">Construir</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Llevar las soluciones tecnológicas a la práctica.
                </p>
              </div>
            </div>
          </article>

          {/* 4. NECESIDADES Y PRODUCTOS */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              04 · Necesidades humanas
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Necesidades y productos tecnológicos
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Las personas tenemos diferentes necesidades y la tecnología
              desarrolla productos que permiten satisfacerlas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  "🏠",
                  "Vivienda",
                  "Productos tecnológicos como casas y pisos.",
                ],
                [
                  "🍎",
                  "Alimentación",
                  "Productos tecnológicos como neveras, microondas y batidoras.",
                ],
                [
                  "👕",
                  "Vestido",
                  "Productos tecnológicos como pantalones, camisas y zapatillas.",
                ],
                [
                  "🚌",
                  "Transporte",
                  "Productos tecnológicos como autobús, avión y bicicleta.",
                ],
                [
                  "💼",
                  "Trabajo",
                  "Productos tecnológicos como ordenador, calculadora y herramientas.",
                ],
                [
                  "📱",
                  "Comunicación",
                  "Productos tecnológicos como teléfono y televisión.",
                ],
                [
                  "🎢",
                  "Ocio",
                  "Productos tecnológicos como parques de atracciones y videojuegos.",
                ],
                [
                  "🩺",
                  "Salud e higiene",
                  "Productos tecnológicos como aparatos de rayos X, jeringuillas y jabón.",
                ],
              ].map(([icono, titulo, descripcion]) => (
                <div
                  key={titulo}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-200 hover:bg-cyan-50/50"
                >
                  <div className="text-2xl">{icono}</div>

                  <h3 className="mt-3 font-extrabold text-slate-950">
                    {titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {descripcion}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 5. SABER TECNOLÓGICO */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              05 · Saber tecnológico
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              El saber tecnológico
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              El saber tecnológico es el resultado de la suma del conocimiento
              científico, el conocimiento técnico y la influencia social de
              cada época.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-extrabold text-slate-950">
                  Conocimiento científico
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Física, matemáticas, dibujo y otros conocimientos científicos.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-extrabold text-slate-950">
                  Conocimiento técnico
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Técnicas de trabajo, herramientas, máquinas y procedimientos.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <h3 className="font-extrabold text-slate-950">
                  Influencia social
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Costumbres y consideraciones medioambientales de cada época.
                </p>
              </div>
            </div>
          </article>

          {/* 6. RECURSOS AUDIOVISUALES */}
          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              Recursos audiovisuales
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Vídeos
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Visualiza los recursos audiovisuales incluidos en este apartado
              de la unidad.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* VÍDEO 2 */}
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/c2KaLr-CRJE"
                    title="Fabricando Made in Spain. Gusanitos"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-cyan-600">
                    Vídeo 2
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                    Fabricando Made in Spain. Gusanitos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Recurso audiovisual incluido en el material de la unidad.
                  </p>
                </div>
              </div>

              {/* VÍDEO 3 */}
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/VOwZdtxZ7oQ"
                    title="Fabricación de torres eólicas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-cyan-600">
                    Vídeo 3
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                    Fabricación de torres eólicas
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Recurso audiovisual incluido en el material de la unidad.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* IDEA CLAVE */}
          <article className="rounded-3xl bg-cyan-600 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-100">
              Idea clave
            </p>

            <p className="mt-4 text-2xl font-extrabold leading-9 md:text-3xl">
              La tecnología utiliza conocimientos y técnicas para satisfacer
              necesidades humanas y resolver problemas de nuestra vida
              cotidiana.
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
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/metodo-proyectos"
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