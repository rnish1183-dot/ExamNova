import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sampleQuestions = [
  { year: 2026, q: "If f(x)=x^2+3x, find f(2).", a: "10" },
  { year: 2025, q: "Derivative of sin(x)?", a: "cos(x)" },
  { year: 2024, q: "Atomic number of Oxygen?", a: "8" },
  { year: 2023, q: "Value of g (approx)?", a: "9.8 m/s^2" },
  { year: 2022, q: "Speed of light?", a: "3 x 10^8 m/s" }
];

export default function StudentPYQSite() {
  const [search, setSearch] = useState("");

  const filtered = sampleQuestions.filter((q) =>
    q.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">JEE PYQ Hub (2002–2026)</h1>

      <p className="mb-6 text-gray-600">
        Free previous year questions, practice quizzes, and student resources.
      </p>

      <Input
        placeholder="Search questions..."
        className="mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <h2 className="font-semibold">Year: {item.year}</h2>
              <p className="mt-2">{item.q}</p>
              <details className="mt-2">
                <summary className="cursor-pointer text-blue-600">Show Answer</summary>
                <p className="mt-1">{item.a}</p>
              </details>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Daily Study Tips</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Practice 20 questions daily.</li>
          <li>Revise formulas every night.</li>
          <li>Take weekly mock tests.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Student Leaderboard</h2>
        <p className="text-gray-600">Top users solving the most questions will appear here.</p>
        <Button className="mt-3">Start Practice</Button>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © 2026 PYQ Hub for Students
      </footer>
    </div>
  );
}
