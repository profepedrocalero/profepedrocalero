import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    title: "1º ESO",
    href: "/eso/1eso",
    subjects: ["Computación y Robótica"],
  },
  {
    title: "2º ESO",
    href: "/eso/2eso",
    subjects: [
      "Tecnología y Digitalización",
      "Computación y Robótica",
    ],
  },
  {
    title: "3º ESO",
    href: "/eso/3eso",
    subjects: [
      "Tecnología y Digitalización",
      "Robótica",
    ],
  },
  {
    title: "4º ESO",
    href: "/eso/4eso",
    subjects: [
      "Tecnología",
      "Digitalización",
    ],
  },
];

export default function ESOPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <h1 className="text-5xl font-black">
          Educación Secundaria Obligatoria
        </h1>

        <p className="mt-4 text-slate-400">
          Selecciona el curso para acceder a los recursos.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {courses.map((course) => (

            <Link key={course.title} href={course.href}>

              <Card className="rounded-3xl border-slate-800 bg-slate-900 transition hover:border-cyan-500 hover:-translate-y-1">

                <CardContent className="p-8">

                  <h2 className="text-3xl font-bold">
                    {course.title}
                  </h2>

                  <ul className="mt-6 space-y-2 text-slate-400">

                    {course.subjects.map((subject) => (

                      <li key={subject}>
                        • {subject}
                      </li>

                    ))}

                  </ul>

                </CardContent>

              </Card>

            </Link>

          ))}

        </div>

      </section>
    </main>
  );
}