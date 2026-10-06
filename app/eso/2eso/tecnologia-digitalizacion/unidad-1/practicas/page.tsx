import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Presentation,
  Table,
  Type,
  FileEdit,
} from "lucide-react";

const practicas = [
  {
    numero: "01",
    titulo: "Elaborar una memoria con Writer",
    descripcion:
      "Aprende a elaborar una memoria de un proyecto tecnológico utilizando un procesador de textos.",
    icono: FileEdit,
  },
  {
    numero: "02",
    titulo: "Mejorar el aspecto de un párrafo",
    descripcion:
      "Trabaja el formato y la presentación del texto para mejorar el aspecto de una memoria de proyecto.",
    icono: Type,
  },
  {
    numero: "03",
    titulo: "Insertar tablas e imágenes",
    descripcion:
      "Aprende a incorporar tablas e imágenes en la documentación de un proyecto tecnológico.",
    icono: Table,
  },
  {
    numero: "04",
    titulo: "Portada, numeración, encabezados y pies",
    descripcion:
      "Completa la presentación de un documento incorporando portada, numeración, encabezados y pies de página.",
    icono: FileText,
  },
  {
    numero: "05",
    titulo: "Presentar un proyecto técnico con Impress",
    descripcion:
      "Prepara una presentación digital para explicar y presentar un proyecto técnico.",
    icono: Presentation,
  },
];

export default function PracticasPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* CABECERA */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <Link
            href="/eso/2eso/tecnologia-digitalizacion/unidad-1"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la Unidad 1
          </Link>

          <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
            2º ESO · Tecnología y Digitalización
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Prácticas
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Pon en práctica lo aprendido en la unidad mediante diferentes
            actividades relacionadas con la elaboración y presentación de un
            proyecto tecnológico.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Unidad 1
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Aprende haciendo
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            En estas prácticas aprenderás a utilizar diferentes herramientas
            digitales para elaborar, organizar y presentar la documentación de
            un proyecto tecnológico.
          </p>
        </div>

        {/* TARJETAS */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {practicas.map((practica) => {
            const Icon = practica.icono;

            return (
              <div
                key={practica.numero}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-widest text-slate-400">
                    {practica.numero}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-slate-950">
                  {practica.titulo}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {practica.descripcion}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-400">
                  Próximamente
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* VOLVER */}
      <div className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10">
        <Link
          href="/eso/2eso/tecnologia-digitalizacion/unidad-1"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-slate-950"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la Unidad 1
        </Link>
      </div>
    </main>
  );
}