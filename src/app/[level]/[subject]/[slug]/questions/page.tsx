import { notFound } from "next/navigation";
import Link from "next/link";
import { LEVEL_NAMES, SUBJECT_NAMES, type SchoolLevel, type Subject } from "@/types";
import { getAllResources, getResourceBySlug } from "@/data/resources";
import { QuestionsClient } from "./QuestionsClient";

interface Props {
  params: Promise<{ level: string; subject: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllResources()
    .filter((r) => r.type === "quiz" && r.quizData)
    .map((r) => ({ level: r.level, subject: r.subject, slug: r.slug }));
}

export default async function QuestionsPage({ params }: Props) {
  const { level, subject, slug } = await params;
  const resource = getResourceBySlug(level as SchoolLevel, subject as Subject, slug);

  if (!resource || resource.type !== "quiz" || !resource.quizData) {
    notFound();
  }

  const quiz = resource.quizData;
  const levelName = LEVEL_NAMES[resource.level];
  const subjectName = SUBJECT_NAMES[resource.subject];
  const quizHref = `/${level}/${subject}/${slug}`;

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-1 text-sm text-warm-500">
        <Link href="/" className="hover:text-accent-600">Accueil</Link>
        <span>/</span>
        <Link href={`/${level}`} className="hover:text-accent-600">{levelName}</Link>
        <span>/</span>
        <Link href={`/${level}/${subject}`} className="hover:text-accent-600">{subjectName}</Link>
        <span>/</span>
        <Link href={quizHref} className="hover:text-accent-600">{resource.title}</Link>
        <span>/</span>
        <span className="text-warm-700">Toutes les questions</span>
      </nav>

      <div>
        <h1 className="text-2xl font-bold text-warm-800">{quiz.title}</h1>
        <p className="text-sm text-warm-500">Toutes les questions · {quiz.levels ? quiz.levels.reduce((n, l) => n + l.questions.length, 0) : (quiz.questions?.length ?? 0)} au total</p>
      </div>

      <QuestionsClient
        quiz={quiz}
        resourceSlug={slug}
        quizHref={quizHref}
      />
    </div>
  );
}
