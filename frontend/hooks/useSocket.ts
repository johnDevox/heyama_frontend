"use client";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type { AppObject } from '@/lib/api';

/**
 * Hook pour se connecter au serveur Socket.IO et écouter les événements
 * `object:created` et `object:deleted`.
 *
 * - onObjectCreated: callback appelé avec l'objet créé (type AppObject).
 * - onObjectDeleted: callback appelé avec la payload { id } lorsque l'objet est supprimé.
 *
 * Le hook connecte automatiquement au serveur défini par la variable
 * d'environnement NEXT_PUBLIC_SOCKET_URL et détache les handlers au
 * démontage.
 */
export function useSocket(
  onObjectCreated: (obj: AppObject) => void,
  onObjectDeleted: (data: { id: string }) => void,
) {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SOCKET_URL;
    if (!url) return;
    const socket = io(url);
    socketRef.current = socket;
    socket.on("object:created", onObjectCreated);
    socket.on("object:deleted", onObjectDeleted);
    return () => {
      socket.off("object:created", onObjectCreated);
      socket.off("object:deleted", onObjectDeleted);
      socket.disconnect();
    };
  }, [onObjectCreated, onObjectDeleted]);
}
