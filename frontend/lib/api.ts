import axios from 'axios';

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

export const getObjects = (): Promise<AppObject[]> =>
  api.get('/objects').then((r) => r.data as AppObject[]);

export const getObject = (id: string): Promise<AppObject> =>
  api.get(`/objects/${id}`).then((r) => r.data as AppObject);

export const deleteObject = (id: string) =>
  api.delete(`/objects/${id}`).then((r) => r.data);

export const createObject = (formData: FormData) =>
  api
    .post('/objects', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((r) => r.data as AppObject);