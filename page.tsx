'use client';

import { useEffect, useState } from 'react';
import { TeacherCard } from '@/components/TeacherCard';
import { Teacher } from '@/types/teacher';
import { Button } from '@/components/ui/button';

export default function TeacherManagementPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    // Simulated fetch
    setTeachers([
      { id: 1, name: 'John Doe', subject: 'Mathematics', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', subject: 'Science', email: 'jane@example.com' },
    ]);
  }, []);

  return (
    <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Management</h1>
        <Button>Add New Teacher</Button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </section>
    </main>
  );
}
