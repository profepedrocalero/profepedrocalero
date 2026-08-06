import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <Logo />

        <nav className="hidden gap-8 md:flex">

          <a href="#" className="transition hover:text-cyan-400">
            Inicio
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Recursos
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Blog
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Sobre mí
          </a>

          <a href="#" className="transition hover:text-cyan-400">
            Contacto
          </a>

        </nav>

        <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400">
          Aula Virtual
        </button>

      </div>

    </header>
  );
}