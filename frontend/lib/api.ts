import axios from 'axios';

/**
 * Représente un objet géré par l'application.
 */
export interface AppObject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Récupère la liste des objets depuis l'API.
 * Retourne une promesse résolue avec un tableau de `AppObject`.
 */
export const getObjects = (): Promise<AppObject[]> =>
  api.get('/objects').then((r) => r.data as AppObject[]);

/**
 * Récupère un objet par son identifiant.
 * @param id - Identifiant de l'objet
 */
export const getObject = (id: string): Promise<AppObject> =>
  api.get(`/objects/${id}`).then((r) => r.data as AppObject);

/**
 * Supprime un objet côté API.
 * @param id - Identifiant de l'objet à supprimer
 */
export const deleteObject = (id: string) =>
  api.delete(`/objects/${id}`).then((r) => r.data);

/**
 * Crée un objet en envoyant un FormData (multipart/form-data) à l'API.
 * @param formData - FormData contenant title, description et image
 */
export const createObject = (formData: FormData) =>
  api
    .post('/objects', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((r) => r.data as AppObject);