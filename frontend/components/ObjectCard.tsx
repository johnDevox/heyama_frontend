import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { AppObject } from '@/lib/api';

export function ObjectCard({
  object,
  onDelete,
}: {
  object: AppObject;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-full h-40">
        <Image src={object.imageUrl} alt={object.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h2 className="font-semibold text-lg">{object.title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{object.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between px-4 pb-4">
        <Link href={`/objects/${object.id}`}>
          <Button variant="outline" size="sm">Voir</Button>
        </Link>
        <Button variant="destructive" size="sm" onClick={() => onDelete(object.id)}>
          Supprimer
        </Button>
      </CardFooter>
    </Card>
  );
}