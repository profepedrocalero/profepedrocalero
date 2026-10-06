import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileCheck,
  FileText,
  Hammer,
  Lightbulb,
  PencilRuler,
  Search,
  Wrench,
} from "lucide-react";

const memoria = [
  {
    numero: "01",
    titulo: "Portada",
    icono: FileText,
    descripcion:
      "Incluye datos como el título del proyecto, el nombre de los componentes, el curso y el grupo.",
  },
  {
    numero: "02",
    titulo: "Índice",
    icono: BookOpen,
    descripcion:
      "Recoge los diferentes apartados que forman parte de la memoria del proyecto.",
  },
  {
    numero: "03",
    titulo: "Definición de la propuesta",
    icono: PencilRuler,
    descripcion:
      "Se define la propuesta del proyecto y se concreta qué se pretende realizar.",
  },
  {
    numero: "04",
    titulo: "Investigación",
    icono: Search,
    descripcion:
      "Se recoge la información investigada que resulta necesaria para desarrollar el proyecto.",
  },
  {
    numero: "05",
    titulo: "Soluciones posibles",
    icono: Lightbulb,
    descripcion:
      "Se presentan y analizan las diferentes soluciones que podrían resolver el problema planteado.",
  },
  {
    numero: "06",
    titulo: "Descripción de la solución elegida",
    icono: CheckCircle2,
    descripcion:
      "Se explica con detalle la solución que finalmente se ha elegido para desarrollar el proyecto.",
  },
  {
    numero: "07",
    titulo: "Planos de construcción",
    icono: PencilRuler,
    descripcion:
      "Se incluyen los planos y dibujos necesarios para comprender cómo se construirá el producto.",
  },
  {
    numero: "08",
    titulo: "Planificación",
    icono: ClipboardList,
    descripcion:
      "Incluye la lista de materiales, la lista de herramientas y la distribución de las tareas.",
  },
  {
    numero: "09",
    titulo: "Realización",
    icono: Hammer,
    descripcion:
      "Se recoge información sobre la realización y construcción del proyecto.",
  },
  {
    numero: "10",
    titulo: "Pruebas finales y conclusiones",
    icono: FileCheck,
    descripcion:
      "Se recogen las pruebas realizadas al producto y las conclusiones obtenidas al finalizar el proyecto.",
  },
];

export default function DocumentosProyectoPage() {
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
              <FileText className="h-8 w-8 text-cyan-600" />
            </div>

            <p className="text-sm font-extrabold uppercase tracking-wider text-cyan-600">
              Unidad 1 · Teoría · Apartado 4
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Documentos básicos para la elaboración de un proyecto
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Conoce la documentación necesaria para organizar, desarrollar y
              recoger la información de un proyecto tecnológico.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}

      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="space-y-8">
          {/* INTRODUCCIÓN */}

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                <FileText className="h-6 w-6 text-cyan-600" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                  01 · La documentación
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                  Documentar también forma parte del proyecto
                </h2>
              </div>
            </div>

            <p className="mt-7 leading-8 text-slate-600">
              Los proyectos que realizamos requieren una documentación que es
              tan importante como el objeto que vamos a construir.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              La documentación comprende toda la información que recogemos
              durante las diferentes fases del método de proyectos.
            </p>

            {/* IMAGEN 1 */}

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="p-4 md:p-6">
                <Image
                  src="/images/unidad-1/documentacion-proyectos.png"
                  alt="Documentación de proyectos: antes, durante y después de la construcción"
                  width={1386}
                  height={1010}
                  className="h-auto w-full rounded-2xl"
                  priority
                />
              </div>

              <div className="border-t border-slate-200 bg-white px-6 py-4">
                <p className="text-center text-sm font-semibold text-slate-600">
                  La documentación acompaña al proyecto antes, durante y
                  después de la construcción.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <PencilRuler className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-extrabold text-slate-950">
                  Antes
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Preparamos el proyecto y planificamos qué vamos a hacer y
                  cómo.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <Wrench className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-extrabold text-slate-950">
                  Durante
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Registramos el trabajo que vamos realizando durante la
                  construcción.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                  <FileCheck className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-extrabold text-slate-950">
                  Después
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Recogemos toda la información referente a la construcción
                  realizada.
                </p>
              </div>
            </div>
          </article>

          {/* ANTES DE LA CONSTRUCCIÓN */}

          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              02 · Antes de la construcción
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              El anteproyecto
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-700">
              El anteproyecto recoge las primeras fases de diseño y
              planificación del método de proyectos.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-slate-700">
              Es el documento que necesitamos tener antes de empezar a
              construir, para saber qué vamos a hacer y cómo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-2xl">✏️</div>

                <h3 className="mt-3 font-extrabold text-slate-950">
                  1. Dibujos
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bocetos de las primeras ideas y un croquis más detallado de
                  la solución elegida.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-2xl">🧰</div>

                <h3 className="mt-3 font-extrabold text-slate-950">
                  2. Materiales y herramientas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Listas de los materiales y herramientas necesarios.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-2xl">💶</div>

                <h3 className="mt-3 font-extrabold text-slate-950">
                  3. Presupuesto
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Previsión de los materiales que se van a utilizar y el coste
                  que tienen.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-2xl">👥</div>

                <h3 className="mt-3 font-extrabold text-slate-950">
                  4. Reparto de tareas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Distribución de las distintas tareas entre las personas que
                  intervendrán en las diferentes fases de fabricación.
                </p>
              </div>
            </div>
          </article>

          {/* DURANTE LA CONSTRUCCIÓN */}

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              03 · Durante la construcción
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              Documentamos el trabajo que realizamos
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* DIARIO */}

              <div className="rounded-3xl bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-sm">
                  <ClipboardList className="h-6 w-6" />
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-cyan-600">
                  Documento 1
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                  Diario de construcción
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  En él apuntamos cada día qué tareas ha hecho cada miembro del
                  grupo.
                </p>
              </div>

              {/* HOJA DE PROCESOS */}

              <div className="rounded-3xl bg-slate-50 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-sm">
                  <Wrench className="h-6 w-6" />
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-cyan-600">
                  Documento 2
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                  Hoja de procesos
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Es un documento más completo donde indicamos cómo es cada una
                  de las piezas que se van a construir, con qué herramientas
                  las haremos, qué tareas supone la construcción, cuál es el
                  tiempo requerido, quién ha hecho cada tarea y qué problemas
                  han surgido.
                </p>
              </div>
            </div>
          </article>

          {/* DESPUÉS DE LA CONSTRUCCIÓN */}

          <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <FileCheck className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  04 · Después de la construcción
                </p>

                <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                  La memoria o informe técnico
                </h2>
              </div>
            </div>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">
              La memoria es el documento posterior a la realización del
              proyecto en el que se recoge toda la información referente a su
              construcción.
            </p>

            <div className="mt-8 rounded-2xl bg-white/5 p-6">
              <p className="text-sm leading-7 text-slate-300">
                La memoria puede incluir también el anteproyecto y recoge los
                diferentes aspectos desarrollados durante el proyecto.
              </p>
            </div>
          </article>

          {/* 10 ELEMENTOS DE LA MEMORIA */}

          <article>
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                05 · La memoria
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                Los 10 apartados de la memoria
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                La memoria o informe técnico puede organizarse en los
                siguientes apartados.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {memoria.map((apartado) => {
                const Icono = apartado.icono;

                return (
                  <article
                    key={apartado.numero}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-extrabold text-cyan-600">
                        {apartado.numero}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-extrabold leading-tight text-slate-950">
                            {apartado.titulo}
                          </h3>

                          <Icono className="hidden h-5 w-5 shrink-0 text-cyan-600 sm:block" />
                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {apartado.descripcion}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </article>

          {/* IMAGEN 2 · EJEMPLO DE MEMORIA */}

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
                Ejemplo visual
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
                Ejemplo de memoria
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Observa un ejemplo de cómo pueden organizarse y presentarse
                diferentes apartados de la memoria de un proyecto tecnológico.
              </p>
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-4 md:p-8">
              <Image
                src="/images/unidad-1/ejemplo-memoria.png"
                alt="Ejemplo de memoria de un proyecto tecnológico"
                width={2047}
                height={1318}
                className="h-auto w-full rounded-2xl border border-slate-200 bg-white shadow-md"
              />
            </div>
          </article>

          {/* RESUMEN VISUAL */}

          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">
              06 · Resumen
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-950 md:text-3xl">
              La documentación acompaña todo el proyecto
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <PencilRuler className="h-6 w-6 text-cyan-600" />

                  <h3 className="font-extrabold text-slate-950">
                    Antes
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Anteproyecto
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-cyan-600" />

                  <h3 className="font-extrabold text-slate-950">
                    Durante
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Diario de construcción + Hoja de procesos
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-cyan-600" />

                  <h3 className="font-extrabold text-slate-950">
                    Después
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Memoria / Informe técnico
                </p>
              </div>
            </div>
          </article>

          {/* IDEA CLAVE */}

          <article className="rounded-3xl bg-cyan-600 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-100">
              Idea clave
            </p>

            <p className="mt-4 max-w-4xl text-2xl font-extrabold leading-9 md:text-3xl">
              Un proyecto tecnológico no termina cuando construimos el
              producto: también debemos documentar cómo lo hemos diseñado,
              planificado, construido y evaluado.
            </p>
          </article>
        </div>

        {/* NAVEGACIÓN */}

        <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/metodo-proyectos"
            className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Apartado anterior
          </Link>

          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria"
            className="inline-flex items-center gap-2 font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            Volver a contenidos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}