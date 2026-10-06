import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bot,
  Code2,
  FileText,
  FolderKanban,
  Globe,
  Monitor,
} from "lucide-react";

const unidades = [
  {
    numero: "01",
    titulo: "Pensamiento computacional",
    descripcion:
      "Desarrolla estrategias para analizar problemas, descomponerlos y encontrar soluciones mediante el pensamiento computacional.",
    icon: Bot,
  },
  {
    numero: "02",
    titulo: "Programación",
    descripcion:
      "Aprende los fundamentos de la programación mediante algoritmos, lenguajes de programación y creación de proyectos.",
    icon: Code2,
  },
  {
    numero: "03",
    titulo: "Computadoras",
    descripcion:
      "Conoce los principales componentes de un ordenador, su funcionamiento y la forma en que procesa la información.",
    icon: Monitor,
  },
  {
    numero: "04",
    titulo: "Redes",
    descripcion:
      "Comprende cómo se conectan los dispositivos, cómo se comunican y cuáles son los fundamentos de las redes.",
    icon: Globe,
  },
];

const recursos = [
  {
    icon: BookOpen,
    titulo: "Apuntes",
    descripcion: "Explicaciones y contenidos de cada unidad.",
  },
  {
    icon: FileText,
    titulo: "Actividades",
    descripcion: "Ejercicios y retos para poner en práctica lo aprendido.",
  },
  {
    icon: FolderKanban,
    titulo: "Proyectos",
    descripcion: "Proyectos de programación, robótica y tecnología.",
  },
];

export default function ComputacionRoboticaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* CABECERA */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <Link
            href="/eso/2eso"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a 2º ESO
          </Link>

          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">
              2º ESO · Computación y Robótica
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Computación
              <span className="block text-cyan-600">
                y Robótica
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Recursos educativos para aprender pensamiento computacional,
              programación, computadoras y redes mediante la práctica y la
              creación de proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* UNIDADES */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Contenidos
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Unidades didácticas
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Explora las cuatro unidades de Computación y Robótica de 2º ESO.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {unidades.map((unidad) => {
            const Icon = unidad.icon;

            return (
              <Link
                href="#"
                key={unidad.numero}
                className="group"
              >
                <article className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-extrabold tracking-wider text-cyan-600">
                          UNIDAD {unidad.numero}
                        </span>

                        <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-600" />
                      </div>

                      <h3 className="mt-3 text-xl font-extrabold leading-7 text-slate-950">
                        {unidad.titulo}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {unidad.descripcion}
                      </p>

                      <div className="mt-5 text-sm font-bold text-cyan-600">
                        Ver unidad
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>

      {/* RECURSOS */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Recursos
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Aprende haciendo
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Materiales para aprender programación, computación y robótica
              de forma práctica.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {recursos.map((recurso) => {
              const Icon = recurso.icon;

              return (
                <div
                  key={recurso.titulo}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-cyan-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                    {recurso.titulo}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {recurso.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-12 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
              Computación y Robótica · 2º ESO
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Programa. Experimenta. Crea.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Selecciona una unidad para comenzar a trabajar con los
              contenidos y recursos disponibles.
            </p>
          </div>

          <Link
            href="/eso/2eso"
            className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-400"
          >
            Volver a 2º ESO
            <ArrowLeft className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}