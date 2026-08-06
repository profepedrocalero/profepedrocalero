const subjects = [
  {
    title: "Tecnología e Ingeniería",
    description: "ESO y Bachillerato",
    icon: "⚙️",
  },
  {
    title: "Programación",
    description: "Python · JavaScript · Scratch",
    icon: "💻",
  },
  {
    title: "Robótica",
    description: "Arduino · Micro:bit",
    icon: "🤖",
  },
  {
    title: "Inteligencia Artificial",
    description: "IA aplicada al aula",
    icon: "🧠",
  },
];

export default function Subjects() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-28">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">
          ¿Qué encontrarás?
        </h2>

        <p className="mt-4 text-slate-400">
          Todo el contenido organizado por materias.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {subjects.map((subject) => (

          <div
            key={subject.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
          >

            <div className="mb-6 text-5xl">

              {subject.icon}

            </div>

            <h3 className="text-2xl font-bold">

              {subject.title}

            </h3>

            <p className="mt-3 text-slate-400">

              {subject.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}