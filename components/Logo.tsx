import { Cpu } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 shadow-lg shadow-cyan-500/30">

        <Cpu className="h-8 w-8 text-white" />

      </div>

      <div>

        <h1 className="text-xl font-black tracking-tight">
          <span className="text-white">Profe</span>{" "}
          <span className="text-cyan-400">Pedro Calero</span>
        </h1>

        <p className="text-xs text-slate-400">
          Tecnología · Ingeniería · IA
        </p>

      </div>

    </div>
  );
}