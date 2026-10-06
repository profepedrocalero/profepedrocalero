import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Wrench,
} from "lucide-react";

const bloques = [
  {
    numero: "01",
    titulo: "Teoría",
    descripcion:
      "Aprende los conceptos fundamentales sobre la tecnología, las necesidades humanas y el proceso tecnológico.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/teoria",
    icono: BookOpen,
  },
  {
    numero: "02",
    titulo: "Actividades",
    descripcion:
      "Pon en práctica lo aprendido con actividades, ejercicios de refuerzo y recursos interactivos.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/actividades",
    icono: ClipboardList,
  },
  {
    numero: "03",
    titulo: "Prácticas",
    descripcion:
      "Aplica el método de proyectos y desarrolla tus propias soluciones tecnológicas.",
    href: "/eso/2eso/tecnologia-digitalizacion/unidad-1/practicas",
    icono: Wrench,
  },
];

export default function Unidad1Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* CABECERA */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          {/* Volver */}
          <Link
            href="/eso/2eso/tecnologia-digitalizacion"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Tecnología y Digitalización
          </Link>

          {/* Identificación */}
          <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
            2º ESO · Tecnología y Digitalización
          </div>

          {/* Título */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Unidad 1
          </h1>

          <h2 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-slate-200 sm:text-4xl">
            Proceso de resolución de problemas tecnológicos
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Descubre cómo la tecnología responde a las necesidades humanas y
            cómo se desarrolla un proyecto tecnológico desde la identificación
            de un problema hasta la creación de una solución.
          </p>
        </div>
      </section>

      {/* IMAGEN PRINCIPAL */}
      <section className="mx-auto max-w-6xl px-6 pt-10 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
          <Image
            src="/images/unidad-1/hero-unidad-1.png"
            alt="Proceso de resolución de problemas tecnológicos"
            width={1536}
            height={864}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Unidad 1
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            ¿Qué vamos a trabajar?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            En esta unidad conocerás qué es la tecnología y cómo surge para
            dar respuesta a las necesidades humanas. También aprenderás las
            fases del método de proyectos y los principales documentos que se
            utilizan para planificar y desarrollar un proyecto tecnológico.
          </p>
        </div>

        {/* BLOQUES */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {bloques.map((bloque) => {
            const Icon = bloque.icono;

            return (
              <Link
                key={bloque.numero}
                href={bloque.href}
                className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-widest text-slate-400">
                    {bloque.numero}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-extrabold text-slate-950">
                  {bloque.titulo}
                </h3>

                <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                  {bloque.descripcion}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-950">
                  Acceder
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BLOQUE FINAL */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-3xl bg-slate-100 p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Aprende haciendo
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Una unidad para aprender haciendo
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              La tecnología no consiste únicamente en conocer conceptos.
              También implica observar problemas, buscar información, diseñar
              soluciones, planificar y construir. A lo largo de esta unidad
              aprenderás a seguir ese proceso.
            </p>
          </div>
        </div>
      </section>

      {/* VOLVER */}
      <div className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <Link
          href="/eso/2eso/tecnologia-digitalizacion"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Tecnología y Digitalización
        </Link>
      </div>
    </main>
  );
}