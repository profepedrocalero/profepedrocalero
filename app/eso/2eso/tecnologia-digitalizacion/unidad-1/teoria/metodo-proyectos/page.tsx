import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  Search,
  PencilRuler,
  Wrench,
  TestTube2,
  Presentation,
  FileText,
} from "lucide-react";

const fases = [
  {
    numero: "01",
    titulo: "Identificación de un problema",
    icono: Search,
    descripcion:
      "Se identifica el problema con el que nos encontramos o la propuesta de trabajo que nos han planteado. Es importante conocer qué queremos solucionar y cuáles son sus condiciones.",
  },
  {
    numero: "02",
    titulo: "Búsqueda de información",
    icono: Search,
    descripcion:
      "Se recopila, analiza y selecciona información relacionada con las distintas posibilidades de resolver el problema. También se analizan productos que satisfagan necesidades semejantes.",
  },
  {
    numero: "03",
    titulo: "Propuesta de solución",
    icono: Lightbulb,
    descripcion:
      "Se piensan distintas alternativas: diversos objetos o productos que puedan resolver el problema. Después se analizan y evalúan para saber si son viables.",
  },
  {
    numero: "04",
    titulo: "Elección de una de las soluciones",
    icono: CheckCircle2,
    descripcion:
      "Se elige la solución que se considera más adecuada, teniendo en cuenta criterios como el tipo de material, el tamaño, la forma o los costes, además de las ventajas e inconvenientes de cada alternativa.",
  },
  {
    numero: "05",
    titulo: "Diseño",
    icono: PencilRuler,
    descripcion:
      "Se realizan dibujos, bocetos, croquis, esquemas o planos de la solución elegida. Primero pueden realizarse a mano alzada y después con mayor detalle.",
  },
  {
    numero: "06",
    titulo: "Preparación y planificación del trabajo",
    icono: ClipboardList,
    descripcion:
      "Se eligen los materiales, las técnicas y las herramientas que habrá que utilizar. Se divide el trabajo en tareas, se planifica el tiempo, se reparte el trabajo y se ordenan las secuencias.",
  },
  {
    numero: "07",
    titulo: "Construcción del producto",
    icono: Wrench,
    descripcion:
      "Incluye la fabricación, el montaje y los acabados de las piezas y del conjunto. Se trabaja con los materiales y herramientas seleccionados previamente y se procura economizar materiales.",
  },
  {
    numero: "08",
    titulo: "Comprobación del resultado",
    icono: TestTube2,
    descripcion:
      "Se comprueba si el producto funciona y responde a su finalidad. También se evalúa su estética y, si es necesario, se proponen modificaciones y mejoras.",
  },
  {
    numero: "09",
    titulo: "Presentación y evaluación",
    icono: Presentation,
    descripcion:
      "Se expone el trabajo realizado y se somete a la valoración de personas externas al grupo.",
  },
  {
    numero: "10",
    titulo: "Elaboración de la memoria",
    icono: FileText,
    descripcion:
      "Se elabora la memoria del proyecto realizado. En ella se recoge la información relacionada con el desarrollo del proyecto y sus diferentes fases.",
  },
];

export default function MetodoProyectosPage() {
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
              Unidad 1 · Teoría · Apartado 3
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              El método de proyectos
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Conoce el método que utiliza el tecnólogo para abordar de forma
              ordenada los problemas tecnológicos y llegar hasta una solución.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="space-y-8">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              01 · ¿Qué es?
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Una forma ordenada de resolver problemas
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              La forma de trabajo de un tecnólogo es siempre ordenada. Para
              resolver un problema tecnológico se sigue un método estructurado
              en diferentes fases, denominado{" "}
              <strong className="text-slate-950">
                método de proyectos
              </strong>
              .
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              El método de proyectos es una forma ordenada de abordar y
              resolver problemas prácticos que se presentan en cualquier
              sociedad.
            </p>
          </article>

          {/* IDEA CLAVE */}
          <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Lightbulb className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Idea fundamental
                </p>

                <p className="mt-3 max-w-4xl text-xl font-extrabold leading-8 md:text-2xl">
                  El método de proyectos parte del problema planteado y nos
                  conduce, mediante una serie de fases, hasta la solución
                  encontrada.
                </p>
              </div>
            </div>
          </article>

          {/* FASES */}
          <article>
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                02 · Las fases
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                Las 10 fases del método de proyectos
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                En este tema trabajamos con diez fases. Todas están
                relacionadas entre sí y, durante el desarrollo de un proyecto,
                puede ser necesario volver a una fase anterior para
                reconsiderar algún aspecto, incorporar nuevas ideas o
                rediseñar una solución.
              </p>
            </div>

            <div className="space-y-5">
              {fases.map((fase) => {
                const Icono = fase.icono;

                return (
                  <div
                    key={fase.numero}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md md:p-8"
                  >
                    <div className="flex gap-5 md:gap-7">
                      {/* NÚMERO */}
                      <div className="shrink-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-lg font-extrabold text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                          {fase.numero}
                        </div>
                      </div>

                      {/* CONTENIDO */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-xl font-extrabold text-slate-950 md:text-2xl">
                            {fase.titulo}
                          </h3>

                          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 sm:flex">
                            <Icono className="h-5 w-5 text-cyan-600" />
                          </div>
                        </div>

                        <p className="mt-3 max-w-4xl leading-7 text-slate-600">
                          {fase.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          {/* CONEXIÓN ENTRE FASES */}
                    {/* RECURSOS AUDIOVISUALES */}
          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              Recursos audiovisuales
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Vídeos sobre el método de proyectos
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Visualiza los siguientes recursos audiovisuales para comprender
              mejor el proceso de resolución de problemas tecnológicos y las
              diferentes fases de un proyecto.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              {/* VÍDEO 4 */}
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/rAV5OehTcA4"
                    title="Simpson 02x15 El Homer, El coche diseñado por Homer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-cyan-600">
                    Vídeo 4
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                    Simpson 02x15 El Homer, El coche diseñado por Homer
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Un ejemplo divertido para reflexionar sobre el proceso de
                    diseño y resolución de problemas tecnológicos.
                  </p>
                </div>
              </div>

              {/* VÍDEO 5 */}
              <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/HVpBoJFL7NI"
                    title="Fases del Proyecto Tecnológico - Gmedrano TIC"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-cyan-600">
                    Vídeo 5
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                    Fases del Proyecto Tecnológico
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Recurso audiovisual del canal Gmedrano TIC para repasar
                    las diferentes fases del proyecto tecnológico.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* CONEXIÓN ENTRE FASES */}
          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              03 · Un proceso conectado
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Las fases no son independientes
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-700">
              Todas las fases del método de proyectos están conectadas. En
              muchas ocasiones es necesario volver a una etapa anterior para
              reconsiderar aspectos del proyecto, repensar las hipótesis de
              partida, incluir nuevas ideas o rediseñar algún elemento.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {fases.map((fase, index) => (
                <div key={fase.numero} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-cyan-600 shadow-sm">
                    {fase.numero}
                  </div>

                  {index < fases.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-cyan-400" />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-sm font-semibold text-cyan-800">
              El proceso puede avanzar, retroceder y volver a plantearse cuando
              sea necesario.
            </p>
          </article>

          {/* RESUMEN */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              04 · Resumen
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Del problema a la solución
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-3xl">🔎</div>
                <h3 className="mt-4 font-extrabold text-slate-950">
                  Analizamos
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Identificamos el problema y buscamos información para
                  comprenderlo.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-3xl">💡</div>
                <h3 className="mt-4 font-extrabold text-slate-950">
                  Diseñamos
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Proponemos soluciones, elegimos una y diseñamos cómo llevarla
                  a cabo.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-3xl">🛠️</div>
                <h3 className="mt-4 font-extrabold text-slate-950">
                  Construimos y evaluamos
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Construimos el producto, comprobamos su funcionamiento y
                  evaluamos el resultado.
                </p>
              </div>
            </div>
          </article>

          {/* IDEA CLAVE FINAL */}
          <article className="rounded-3xl bg-cyan-600 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-100">
              Idea clave
            </p>

            <p className="mt-4 max-w-4xl text-2xl font-extrabold leading-9 md:text-3xl">
              El método de proyectos nos permite abordar los problemas
              tecnológicos de forma ordenada, desde la identificación del
              problema hasta la presentación y evaluación de la solución.
            </p>
          </article>
        </div>

        {/* NAVEGACIÓN */}
        <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/tecnologia-necesidades-humanas"
            className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Apartado anterior
          </Link>

          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/documentos-proyecto"
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