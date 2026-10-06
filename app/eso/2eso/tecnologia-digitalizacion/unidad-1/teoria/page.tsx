import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  FileText,
  Lightbulb,
  PlayCircle,
  Wrench,
} from "lucide-react";

const apartados = [
  {
    numero: "01",
    titulo: "Introducción",
    descripcion:
      "Una introducción al papel de la tecnología y a su relación con las necesidades humanas.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/introduccion",
    icono: Lightbulb,
  },
  {
    numero: "02",
    titulo: "La tecnología como respuesta a las necesidades humanas",
    descripcion:
      "Cómo la tecnología responde a las necesidades humanas y cómo los productos tecnológicos permiten satisfacerlas.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/tecnologia-necesidades-humanas",
    icono: Wrench,
  },
  {
    numero: "03",
    titulo: "El método de proyectos",
    descripcion:
      "Las fases del método de proyectos y el proceso seguido para resolver problemas tecnológicos.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/metodo-proyectos",
    icono: BookOpen,
  },
  {
    numero: "04",
    titulo: "Documentos básicos para la elaboración de un proyecto",
    descripcion:
      "Los principales documentos que se utilizan antes, durante y después de la construcción de un proyecto.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria/documentos-proyecto",
    icono: FileText,
  },
];

export default function TeoriaPage() {
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
              Unidad 1 · Teoría
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Teoría
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Aprende los contenidos fundamentales del proceso de resolución de
            problemas tecnológicos a través de los diferentes apartados de la
            unidad.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* APARTADOS DE TEORÍA */}
        <section>
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
              Contenidos
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Apartados de la unidad
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Consulta cada apartado para estudiar los contenidos de la Unidad
              1 de Tecnología y Digitalización.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {apartados.map((apartado) => {
              const Icono = apartado.icono;

              return (
                <Link
                  key={apartado.numero}
                  href={apartado.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="absolute right-6 top-5 text-6xl font-black text-slate-100 transition group-hover:text-cyan-50">
                    {apartado.numero}
                  </div>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Icono className="h-6 w-6" />
                    </div>

                    <div className="mt-6">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-700">
                        Apartado {apartado.numero}
                      </span>

                      <h3 className="mt-2 pr-12 text-2xl font-bold text-slate-900">
                        {apartado.titulo}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {apartado.descripcion}
                      </p>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-700">
                      Entrar al apartado
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* PRESENTACIÓN */}
        <section className="mt-16">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600">
              Material de apoyo
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
              Presentación de la unidad
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Presentación utilizada en clase con vídeos, imágenes y recursos
              audiovisuales del Tema 1.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-9">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <PlayCircle className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Proceso de resolución de problemas tecnológicos
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Presentación de la Unidad 1 utilizada como apoyo en clase.
                  Incluye los vídeos y recursos audiovisuales del tema.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-700">
                    Tema 1
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
                    Tecnología y Digitalización · 2º ESO
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-600">
                    PDF · 20 páginas
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 border-t border-violet-100 bg-violet-50/50 p-7 md:min-w-[230px] md:border-l md:border-t-0">
                <a
                  href="/documentos/unidad-1/presentacion-tema-1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver presentación
                </a>

                <a
                  href="/documentos/unidad-1/presentacion-tema-1.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
                >
                  <Download className="h-4 w-4" />
                  Descargar PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VOLVER A UNIDADES DIDÁCTICAS */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a las Unidades didácticas
          </Link>
        </div>
      </div>
    </main>
  );
}