import PlayArena from "@/components/ui/PlayArea";
import { notFound } from "next/navigation";

export default async function Player({
  params,
}: {
  params: Promise<{ player: string }>;
}) {
  const { player } = await params;
  const player_count = parseInt(player);
  if (isNaN(player_count) || player_count < 3 || player_count > 5)
    return notFound();
  return (
    <div className="w-screen h-[100svh] flex items-center justify-center">
      <PlayArena players={player_count} />
    </div>
  );
}
