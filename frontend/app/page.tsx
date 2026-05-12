'use client';
import { useEffect, useState } from 'react';
import { getObjects, deleteObject, type AppObject } from '@/lib/api';
import { useSocket } from '@/hooks/useSocket';
import { CreateObjectForm } from '@/components/CreateObjectForm';
import { ObjectCard } from '@/components/ObjectCard';

export default function HomePage() {
  const [objects, setObjects] = useState<AppObject[]>([]);

  useEffect(() => {
    getObjects().then((data) => setObjects(data || []));
  }, []);

  useSocket(
    (newObj: AppObject) => setObjects((prev) => [newObj, ...prev]),
    (payload: { id: string }) => setObjects((prev) => prev.filter((o) => o.id !== payload.id)),
  );

  const handleDelete = async (id: string) => {
    await deleteObject(id);
    setObjects((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Heyama Objects</h1>
      <CreateObjectForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {objects.map((obj) => (
          <ObjectCard key={obj.id} object={obj} onDelete={handleDelete} />
        ))}
      </div>
    </main>
  );
}