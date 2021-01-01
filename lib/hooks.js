import { useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return { player: data?.player || null };
    });

export function usePlayer({ redirectTo, redirectIfFound } = {}) {
  const router = useRouter();

  const { data, error } = useSWR("/api/player", fetcher);
  const player = data?.player;
  const finished = Boolean(data);
  const hasPlayer = Boolean(player);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the player was not found.
      (redirectTo && !redirectIfFound && !hasPlayer) ||
      // If redirectIfFound is also set, redirect if the player was found
      (redirectIfFound && hasPlayer)
    ) {
      router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasPlayer]);

  return error ? null : player;
}
