"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Fondo decorativo */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Profesor de Tecnología e Ingeniería
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Aprende Tecnología

            <span className="mt-2 block text-cyan-600">
              construyendo proyectos reales.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Recursos gratuitos, organizados por asignaturas y cursos,
            para aprender Tecnología, Programación, Robótica,
            Inteligencia Artificial y Tecnología e Ingeniería.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link href="/recursos">
              <Button
                size="lg"
                className="rounded-xl bg-cyan-600 px-8 font-semibold hover:bg-cyan-700"
              >
                Explorar recursos

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/sobre-mi">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 font-semibold"
              >
                Sobre mí
              </Button>
            </Link>

          </div>

          {/* ESTADÍSTICAS */}

          <div className="mt-14 flex flex-wrap gap-10 sm:gap-14">

            <div>
              <p className="text-4xl font-extrabold text-slate-900">
                300+
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Recursos educativos
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-slate-900">
                11
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Asignaturas
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-slate-900">
                ESO
              </p>

              <p className="mt-1 text-sm text-slate-500">
                + Bachillerato
              </p>
            </div>

          </div>

        </motion.div>

        {/* ILUSTRACIÓN */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-2xl">

            <img
              src="/images/hero/profepedrocalero-hero.png"
              alt="Profesor de Tecnología trabajando con programación, robótica e impresión 3D"
              className="h-auto w-full"
            />

          </div>

          {/* Etiqueta inferior */}

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">

            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Tecnología
            </p>

            <p className="mt-1 font-bold text-slate-800">
              Aprende haciendo
            </p>

          </div>

          {/* Etiqueta superior */}

          <div className="absolute -right-5 -top-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">

            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
              Recursos
            </p>

            <p className="mt-1 font-bold text-slate-800">
              ESO + Bachillerato
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}