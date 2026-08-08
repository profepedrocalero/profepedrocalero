"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  {
    title: "ESO",
    description: "Recursos de 1º a 4º ESO",
    href: "/eso",
    courses: ["1º ESO", "2º ESO", "3º ESO", "4º ESO"],
  },
  {
    title: "Bachillerato",
    description: "Tecnología e Ingeniería y TIC",
    href: "/bachillerato",
    courses: ["1º Bach.", "2º Bach."],
  },
];

export default function Resources() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">

      <div className="mb-16 text-center">

        <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Recursos
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Explora por etapas educativas
        </h2>

        <p className="mt-6 text-slate-400">
          Accede rápidamente al contenido organizado por cursos y asignaturas.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {stages.map((stage, index) => (

          <motion.div
            key={stage.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >

            <Link href={stage.href}>

              <Card className="group rounded-3xl border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">

                <CardContent className="p-10">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                    <GraduationCap className="h-8 w-8 text-cyan-400" />

                  </div>

                  <h3 className="text-4xl font-black">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-slate-400">
                    {stage.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {stage.courses.map((course) => (

                      <span
                        key={course}
                        className="rounded-full bg-slate-800 px-4 py-2 text-sm"
                      >
                        {course}
                      </span>

                    ))}

                  </div>

                  <div className="mt-10 flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-4">

                    Explorar recursos

                    <ArrowRight size={18} />

                  </div>

                </CardContent>

              </Card>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}