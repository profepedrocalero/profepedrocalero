"use client";

import { GraduationCap, School, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex aspect-square max-w-sm items-center justify-center rounded-3xl bg-slate-800 text-8xl">
            👨‍🏫
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="mb-3 text-cyan-400 font-semibold">SOBRE MÍ</p>

          <h2 className="text-5xl font-black">
            Pedro Calero
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Profesor de Tecnología e Ingeniería, TIC, Computación y Robótica
            en ESO y Bachillerato. Mi objetivo es crear recursos prácticos y
            gratuitos para ayudar a estudiantes y docentes a aprender
            tecnología de una forma moderna y motivadora.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl bg-slate-900 p-6">
              <GraduationCap className="mb-4 text-cyan-400" />
              <h3 className="font-bold">ESO</h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              <School className="mb-4 text-cyan-400" />
              <h3 className="font-bold">Bachillerato</h3>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6">
              <Laptop className="mb-4 text-cyan-400" />
              <h3 className="font-bold">IA y Programación</h3>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}