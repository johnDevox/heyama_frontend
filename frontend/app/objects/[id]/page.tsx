import { getObject, type AppObject } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default async function ObjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const object: AppObject = await getObject(id);

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Link href="/">
        <Button variant="outline" className="mb-6">
          ← Retour
        </Button>
      </Link>

      <div className="w-full h-64 relative rounded-xl mb-6 overflow-hidden">
        <Image
          src={object.imageUrl}
          alt={object.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold">{object.title}</h1>

      <p className="text-gray-600 mt-2">
        {object.description}
      </p>

      <p className="text-sm text-gray-400 mt-4">
        Créé le :{' '}
        {new Date(object.createdAt).toLocaleDateString('fr-FR')}
      </p>
    </main>
  );
}