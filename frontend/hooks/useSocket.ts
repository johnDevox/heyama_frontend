"use client";
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type { AppObject } from '@/lib/api';

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
