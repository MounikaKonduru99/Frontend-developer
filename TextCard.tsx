import { Teacher } from '@/types/teacher';

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <article
      tabIndex={0}
      role="region"
      aria-label={`Teacher card for ${teacher.name}`}
      className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      <h2 className="text-xl font-semibold text-gray-900">{teacher.name}</h2>
      <p className="text-gray-600 text-sm">Subject: {teacher.subject}</p>
      <p className="text-gray-600 text-sm">Email: {teacher.email}</p>
    </article>
  );
}
