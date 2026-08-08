"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Bot,
  Brain,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: Cpu,
    title: "Tecnología",
    description:
      "Diseño, estructuras, mecanismos, electricidad, electrónica e impresión 3D.",
  },
  {
    icon: Code2,
    title: "Programación",
    description:
      "Aprende a programar con Scratch, Python y otros lenguajes mediante proyectos prácticos.",
  },
  {
    icon: Bot,
    title: "Robótica",
    description:
      "Arduino, sensores, actuadores y automatización para construir proyectos reales.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Descubre cómo funciona la IA y aprende a utilizarla de forma responsable en educación.",
  },
];

export default function Features() {
  return (
    <section
      id="areas"
      className="bg-white px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Cabecera */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Áreas de aprendizaje
          </span>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Todo lo que necesitas para
            <span className="block text-cyan-600">
              aprender Tecnología.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Recursos, proyectos y materiales organizados para que puedas
            aprender de forma práctica, clara y progresiva.
          </p>
        </motion.div>

        {/* Tarjetas */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
              >

                {/* Icono */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Contenido */}

                <h3 className="mt-7 text-xl font-extrabold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-600">
                  {area.description}
                </p>

                {/* Enlace visual */}

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-cyan-600">
                  Ver recursos

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}