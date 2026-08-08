import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Bot, ArrowRight } from "lucide-react";

const subjects = [
  {
    title: "Tecnología y Digitalización",
    description: "Proyectos, diseño, programación y tecnología.",
    href: "/eso/2eso/tecnologia-digitalizacion",
    icon: Cpu,
  },
  {
    title: "Computación y Robótica",
    description: "Scratch, Python, Arduino y Robótica.",
    href: "/eso/2eso/computacion-robotica",
    icon: Bot,
  },
];

export default function SegundoESOPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          ESO
        </p>

        <h1 className="mt-4 text-5xl font-black">
          2º ESO
        </h1>

        <p className="mt-4 text-slate-400">
          Selecciona una asignatura para acceder al contenido.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <Link key={subject.title} href={subject.href}>

                <Card className="group rounded-3xl border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-cyan-500">

                  <CardContent className="p-10">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                      <Icon className="h-8 w-8 text-cyan-400" />
                    </div>

                    <h2 className="text-3xl font-bold">
                      {subject.title}
                    </h2>

                    <p className="mt-4 text-slate-400">
                      {subject.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 group-hover:gap-4 transition-all">
                      Entrar
                      <ArrowRight size={18} />
                    </div>

                  </CardContent>

                </Card>

              </Link>
            );
          })}

        </div>

      </section>
    </main>
  );
}