'use client';
import { useState } from 'react';
import { createObject } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function CreateObjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !description || !image) return alert('Tous les champs sont requis');
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);
      await createObject(formData);
      setTitle('');
      setDescription('');
      setImage(null);
    } catch {
      alert('Erreur lors de la création');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold">Créer un objet</h2>
      <div>
        <Label htmlFor="title">Titre</Label>
        <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="image">Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files?.[0] || null)}
        />
      </div>
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Envoi...' : 'Créer'}
      </Button>
    </div>
  );
}