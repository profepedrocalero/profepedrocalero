"use client";

import { Cpu, Bot, Code2, Microchip } from "lucide-react";
import { motion } from "framer-motion";

const subjects = [
  {
    icon: Cpu,
    title: "Tecnología",
    text: "Proyectos, diseño, impresión 3D y resolución de problemas.",
  },
  {
    icon: Code2,
    title: "Programación",
    text: "Scratch, Python y desarrollo de aplicaciones.",
  },
  {
    icon: Microchip,
    title: "Robótica",
    text: "Arduino, sensores, electrónica y automatización.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    text: "IA aplicada a la educación y creación de proyectos.",
  },
];

export default function Subjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold">
          ¿Qué encontrarás en esta web?
        </h2>

        <p className="mt-4 text-slate-400">
          Recursos gratuitos organizados por materias y proyectos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {subjects.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition hover:border-cyan-500"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15">
                <Icon className="h-7 w-7 text-cyan-400" />
              </div>

              <h3 className="mb-3 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}