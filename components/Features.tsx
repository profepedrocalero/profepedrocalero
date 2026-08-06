const cards = [
  {
    icon: "📚",
    title: "Recursos",
    description: "Más de 300 materiales gratuitos."
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description: "IA aplicada al aula y a la enseñanza."
  },
  {
    icon: "💻",
    title: "Programación",
    description: "Python, Arduino, Scratch y JavaScript."
  },
  {
    icon: "🎓",
    title: "ESO y Bachillerato",
    description: "Todo organizado por niveles."
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-32">

      <h2 className="mb-16 text-center text-5xl font-bold">
        ¿Qué encontrarás?
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:bg-white/10"
          >
            <div className="text-5xl">
              {card.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {card.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {card.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}