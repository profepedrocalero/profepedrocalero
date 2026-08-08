import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Presentation,
  GraduationCap,
  Bot,
  Hammer,
  Video,
} from "lucide-react";

const sections = [
  {
    title: "Situaciones de Aprendizaje",
    icon: BookOpen,
    description: "Accede a todas las situaciones de aprendizaje del curso.",
  },
  {
    title: "Apuntes",
    icon: FileText,
    description: "Material teórico en PDF y otros formatos.",
  },
  {
    title: "Presentaciones",
    icon: Presentation,
    description: "Presentaciones utilizadas en clase.",
  },
  {
    title: "Vídeos",
    icon: Video,
    description: "Explicaciones y recursos audiovisuales.",
  },
  {
    title: "Proyectos",
    icon: Hammer,
    description: "Retos y proyectos tecnológicos.",
  },
  {
    title: "Exámenes",
    icon: GraduationCap,
    description: "Pruebas y actividades de evaluación.",
  },
  {
    title: "Inteligencia Artificial",
    icon: Bot,
    description: "Herramientas y actividades con IA.",
  },
];

export default function TecnologiaDigitalizacion2ESO() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          2º ESO
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Tecnología y Digitalización
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-slate-400">
          Bienvenido al espacio de la asignatura. Aquí encontrarás todos los
          materiales organizados para facilitar tu aprendizaje.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Card
                key={section.title}
                className="rounded-3xl border-slate-800 bg-slate-900 transition-all hover:-translate-y-2 hover:border-cyan-500"
              >
                <CardContent className="p-8">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h2 className="text-2xl font-bold">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-slate-400">
                    {section.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}

        </div>

      </section>
    </main>
  );
}