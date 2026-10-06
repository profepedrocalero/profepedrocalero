import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Gamepad2,
  GraduationCap,
  Lightbulb,
  PlayCircle,
} from "lucide-react";

const recursosInteractivos = [
  {
    titulo: "El proceso tecnológico: Definiciones",
    descripcion:
      "Repasa los conceptos fundamentales relacionados con la tecnología, la ciencia, la técnica y el proceso tecnológico.",
    tipo: "Educaplay",
    href: "https://es.educaplay.com/recursos-educativos/12910049-tema_01_el_proceso_tecnologic.html",
    icono: Lightbulb,
  },
  {
    titulo: "Etapas del Proceso Tecnológico I",
    descripcion:
      "Practica la identificación y ordenación de las diferentes etapas del proceso tecnológico.",
    tipo: "Educaplay",
    href: "https://es.educaplay.com/recursos-educativos/4194890-etapas_del_proceso_tecnologico.html",
    icono: Gamepad2,
  },
  {
    titulo: "Etapas del Proceso Tecnológico II",
    descripcion:
      "Otra actividad interactiva para trabajar el orden de las etapas del proceso tecnológico.",
    tipo: "Educaplay",
    href: "https://es.educaplay.com/recursos-educativos/4194896-etapas_del_proceso_tecnologico_ii.html",
    icono: Gamepad2,
  },
  {
    titulo: "Etapas del Proceso Tecnológico III",
    descripcion:
      "Continúa practicando y comprobando tus conocimientos sobre las etapas del proceso tecnológico.",
    tipo: "Educaplay",
    href: "https://es.educaplay.com/juego/4194903-etapas_del_proceso_tecnologico_iii.html#!",
    icono: Gamepad2,
  },
  {
    titulo: "El Proceso Tecnológico",
    descripcion:
      "Cuestionario interactivo para comprobar tus conocimientos sobre el proceso tecnológico.",
    tipo: "Kahoot",
    href: "https://create.kahoot.it/share/el-proceso-tecnologico/be79d321-cbc9-42a6-9e31-b3a71547d0e7",
    icono: GraduationCap,
  },
  {
    titulo: "Proceso Tecnológico I",
    descripcion:
      "Pon a prueba tus conocimientos sobre los contenidos fundamentales del tema.",
    tipo: "Kahoot",
    href: "https://create.kahoot.it/share/proceso-tecnologico/5f3e0256-94d7-4563-bed7-6c5a52d9d5b9",
    icono: GraduationCap,
  },
  {
    titulo: "Proceso Tecnológico II",
    descripcion:
      "Continúa repasando los contenidos del proceso tecnológico mediante un cuestionario interactivo.",
    tipo: "Kahoot",
    href: "https://create.kahoot.it/share/1-proceso-tecnologico/157d53a3-128a-4cbb-9e81-1ea16193ce8b",
    icono: GraduationCap,
  },
];

export default function ActividadesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* CABECERA */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la Unidad 1
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
              <BookOpen className="h-5 w-5" />
            </div>

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Unidad 1 · Actividades
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Actividades
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Practica y refuerza los contenidos de la unidad mediante las
            actividades propuestas, los materiales de refuerzo y los recursos
            interactivos.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* RELACIÓN DE ACTIVIDADES */}
        <section>
          <div className="mb-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                Actividades del tema
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Relación de actividades
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Actividades de la Unidad 1 para realizar en el cuaderno de la
              asignatura.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-9">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <FileText className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Relación de actividades · Tema 1
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Documento con las actividades propuestas para trabajar los
                  contenidos del proceso de resolución de problemas
                  tecnológicos.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
                    9 actividades
                  </span>

                  <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-700">
                    Trabajo en el cuaderno
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 border-t border-slate-200 bg-slate-50 p-7 md:min-w-[220px] md:border-l md:border-t-0">
                <a
                  href="/documentos/unidad-1/relacion-actividades-tema-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-5 py-3 font-bold text-white transition hover:bg-cyan-700"
                >
                  <FileText className="h-4 w-4" />
                  Ver actividades
                </a>

                <a
                  href="/documentos/unidad-1/relacion-actividades-tema-1.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVIDADES DE REFUERZO */}
        <section className="mt-16">
          <div className="mb-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-amber-600">
                Para reforzar
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Actividades de refuerzo
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Material adicional para repasar y profundizar en los contenidos
              trabajados durante la unidad.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-9">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Actividades de refuerzo · Tema 1
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Una colección de actividades adicionales para practicar los
                  contenidos sobre las necesidades humanas, el método de
                  proyectos, la documentación de proyectos y el trabajo en el
                  taller.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
                    Material adicional
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
                    PDF
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 border-t border-amber-100 bg-amber-50/50 p-7 md:min-w-[220px] md:border-l md:border-t-0">
                <a
                  href="/documentos/unidad-1/actividades-refuerzo-tema-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-bold text-white transition hover:bg-amber-600"
                >
                  <FileText className="h-4 w-4" />
                  Ver actividades
                </a>

                <a
                  href="/documentos/unidad-1/actividades-refuerzo-tema-1.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-amber-300 hover:text-amber-700"
                >
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVIDADES INTERACTIVAS */}
        <section className="mt-16">
          <div className="mb-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600">
                Aprende jugando
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Actividades interactivas
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Recursos interactivos para repasar los conceptos y las etapas
              del proceso tecnológico.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recursosInteractivos.map((recurso) => {
              const Icono = recurso.icono;

              return (
                <a
                  key={recurso.titulo}
                  href={recurso.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <Icono className="h-6 w-6" />
                    </div>

                    <ExternalLink className="h-5 w-5 text-slate-300 transition group-hover:text-violet-500" />
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-violet-600">
                      {recurso.tipo}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {recurso.titulo}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {recurso.descripcion}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 text-sm font-bold text-violet-700">
                    Abrir recurso →
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-violet-100 bg-violet-50 p-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <Gamepad2 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Más actividades interactivas
                </h3>

                <p className="mt-1 leading-7 text-slate-600">
                  Puedes consultar la colección de recursos de 2º ESO para
                  encontrar más actividades relacionadas con el proceso
                  tecnológico.
                </p>

                <a
                  href="https://pelandintecno.blogspot.com/p/autoevaluacion-2-eso.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-bold text-violet-700 hover:text-violet-900"
                >
                  Ver colección de actividades
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NAVEGACIÓN */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la unidad
          </Link>

          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1/practicas"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Siguiente: Prácticas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}