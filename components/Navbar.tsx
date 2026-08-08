"use client";

import { motion } from "framer-motion";
import { Cpu, GraduationCap } from "lucide-react";

const menu = [
  "Inicio",
  "Recursos",
  "Blog",
  "Sobre mí",
  "Contacto",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/30">

            <Cpu size={30} className="text-white" />

          </div>

          <div>

            <h1 className="text-xl font-black tracking-tight">
              <span className="text-white">Profe </span>

              <span className="text-cyan-400">
                Pedro Calero
              </span>

            </h1>

            <p className="text-xs text-slate-400">
              Tecnología · Ingeniería · IA
            </p>

          </div>

        </div>

        {/* MENU */}

        <nav className="hidden items-center gap-10 lg:flex">

          {menu.map((item) => (

            <a
              key={item}
              href="#"
              className="text-slate-300 transition duration-300 hover:text-cyan-400"
            >
              {item}
            </a>

          ))}

        </nav>

        {/* BOTON */}

        <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-cyan-400">

          <GraduationCap size={20} />

          Aula Virtual

        </button>

      </div>
    </motion.header>
  );
}