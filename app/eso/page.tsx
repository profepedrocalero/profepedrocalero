import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Lightbulb,
  Code2,
  Bot,
  Zap,
} from "lucide-react";

const cursos = [
  {
    curso: "1º ESO",
    descripcion:
      "Introducción a la Tecnología, materiales, estructuras y resolución de problemas.",
    icon: Lightbulb,
    href: "#",
  },
  {
    curso: "2º ESO",
    descripcion:
      "Tecnología y Digitalización, programación, sistemas digitales y proyectos tecnológicos.",
    icon: Cpu,
    href: "/eso/2eso",
    destacado: true,
  },
  {
    curso: "3º ESO",
    descripcion:
      "Electrónica, mecanismos, energía, programación y diseño de proyectos.",
    icon: Zap,
    href: "#",
  },
  {
    curso: "4º ESO",
    descripcion:
      "Tecnología avanzada, pensamiento computacional, robótica e inteligencia artificial.",
    icon: Bot,
    href: "#",
  },
];

const contenidos = [
  {
    icon: Code2,
    titulo: "Programación",
    descripcion:
      "Aprende a programar mediante actividades y proyectos prácticos.",
  },
  {
    icon: Bot,
    titulo: "Robótica",
    descripcion:
      "Diseña, programa y controla sistemas robóticos.",
  },
  {
    icon: Cpu,
    titulo: "Tecnología",
    descripcion:
      "Comprende cómo funcionan los sistemas y crea tus propios proyectos.",
  },
  {
    icon: Lightbulb,
    titulo: "Proyectos",
    descripcion:
      "Aprende haciendo mediante retos y proyectos tecnológicos.",
  },
];

export default function ESOPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Educación Secundaria Obligatoria
            </span>

            <h1 className="mt-7 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Tecnología
              <span className="block text-cyan-600">
                en ESO.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Recursos educativos de Tecnología y Digitalización para
              aprender, practicar y crear proyectos tecnológicos durante
              toda la ESO.
            </p>
          </div>
        </div>
      </section>

      {/* CURSOS */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Cursos
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Elige tu curso
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Accede a los contenidos y recursos organizados por nivel.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cursos.map((curso) => {
            const Icon = curso.icon;

            return (
              <Link
                key={curso.curso}
                href={curso.href}
                className="group"
              >
                <article
                  className={`relative h-full overflow-hidden rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    curso.destacado
                      ? "border-cyan-300 ring-1 ring-cyan-100"
                      : "border-slate-200"
                  }`}
                >
                  {curso.destacado && (
                    <span className="absolute right-6 top-6 rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
                      Disponible
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-600" />
                  </div>

                  <h3 className="mt-7 text-2xl font-extrabold text-slate-950">
                    {curso.curso}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-slate-600">
                    {curso.descripcion}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-cyan-600">
                    Ver contenidos
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ÁREAS */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Aprende haciendo
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              ¿Qué encontrarás?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Una colección de recursos pensados para que la Tecnología
              se entienda mediante la práctica y la creación.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contenidos.map((contenido) => {
              const Icon = contenido.icon;

              return (
                <div
                  key={contenido.titulo}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                    {contenido.titulo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {contenido.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div>
            <div className="flex items-center gap-3 text-cyan-400">
              <BookOpen className="h-6 w-6" />

              <span className="font-bold">
                Recursos educativos
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              Aprende Tecnología creando proyectos reales.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Explora todos los recursos disponibles y encuentra
              actividades para trabajar en clase o desde casa.
            </p>
          </div>

          <Link
            href="/recursos"
            className="mt-8 inline-flex shrink-0 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-400 lg:mt-0"
          >
            Explorar recursos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}