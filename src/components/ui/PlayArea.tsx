"use client";

import { useState } from "react";
interface PlayerData {
  dessert: number;
  water: number;
  mountain: number;
  swamp: number;
  forest: number;
  shack: number;
  stone: number;
  structure: number;
  animal: number;
  bear: number;
  cougar: number;
  white: number;
  green: number;
  blue: number;
}
// const inputs = [
//   "dessert",
//   "water",
//   "mountain",
//   "swamp",
//   "forest",
//   "shack",
//   "stone",
//   "structure",
//   "animal",
//   "bear",
//   "cougar",
//   "white",
//   "green",
//   "blue",
// ];
const hints = [
  { "Dessert or Water": [{ dessert: 0 }, { water: 0 }] },
  { "Water or Swamp": [{ water: 0 }, { swamp: 0 }] },
  { "Water or Forest": [{ water: 0 }, { forest: 0 }] },
  { "Water or mountain": [{ water: 0 }, { mountain: 0 }] },
  { "Dessert or Swamp": [{ dessert: 0 }, { swamp: 0 }] },
  { "Dessert or mountain": [{ dessert: 0 }, { mountain: 0 }] },
  { "Dessert or forest": [{ dessert: 0 }, { forest: 0 }] },
  { "swamp or mountain": [{ swamp: 0 }, { mountain: 0 }] },
  { "swamp or forest": [{ swamp: 0 }, { forest: 0 }] },
  { "forest or mountain": [{ forest: 0 }, { mountain: 0 }] },
  { "1 from dessert": [{ dessert: 1 }] },
  { "1 from forest": [{ forest: 1 }] },
  { "1 from swamp": [{ swamp: 1 }] },
  { "1 from mountain": [{ mountain: 1 }] },
  { "1 from water": [{ water: 1 }] },
  { "2 from cougar": [{ cougar: 2 }] },
  { "2 from bear": [{ bear: 2 }] },
  { "3 from white": [{ white: 3 }] },
  { "3 from blue": [{ white: 3 }] },
  { "3 from green": [{ white: 3 }] },
  { "2 from structure": [{ structure: 2 }] },
  { "2 from stone": [{ stone: 2 }] },
  { "2 from shack": [{ shack: 2 }] },
  { "2 from animal": [{ animal: 2 }] },
];
export default function PlayArena({ players }: { players: number }) {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [playerData, setPlayerData] = useState<PlayerData[]>([
    {
      dessert: 100,
      water: 100,
      mountain: 100,
      swamp: 100,
      forest: 100,
      shack: 100,
      stone: 100,
      structure: 100,
      animal: 100,
      bear: 100,
      cougar: 100,
      white: 100,
      green: 100,
      blue: 100,
    },
    {
      dessert: 100,
      water: 100,
      mountain: 100,
      swamp: 100,
      forest: 100,
      shack: 100,
      stone: 100,
      structure: 100,
      animal: 100,
      bear: 100,
      cougar: 100,
      white: 100,
      green: 100,
      blue: 100,
    },
    {
      dessert: 100,
      water: 100,
      mountain: 100,
      swamp: 100,
      forest: 100,
      shack: 100,
      stone: 100,
      structure: 100,
      animal: 100,
      bear: 100,
      cougar: 100,
      white: 100,
      green: 100,
      blue: 100,
    },
    {
      dessert: 100,
      water: 100,
      mountain: 100,
      swamp: 100,
      forest: 100,
      shack: 100,
      stone: 100,
      structure: 100,
      animal: 100,
      bear: 100,
      cougar: 100,
      white: 100,
      green: 100,
      blue: 100,
    },
    {
      dessert: 100,
      water: 100,
      mountain: 100,
      swamp: 100,
      forest: 100,
      shack: 100,
      stone: 100,
      structure: 100,
      animal: 100,
      bear: 100,
      cougar: 100,
      white: 100,
      green: 100,
      blue: 100,
    },
  ]);

  function getValidHints() {
    return hints.filter((hint) => {
      const entries = Object.values(hint)[0];
      //@ts-expect-error hellohunny // the inner array of condition(s)
      return entries.some((condition) => {
        const [key, required] = Object.entries(condition)[0];
        //@ts-expect-error hello hunny bunny
        return playerData[currentPlayer - 1][key] > required;
      });
    });
  }
  console.log(getValidHints());
  return (
    <div className="w-full h-fit min-[500px] max-w-[500px] flex flex-col p-4 gap-6 rounded-xl border-2 border-gray-500 md:text-xl text-lg ">
      <h1 className="w-full">Player : {currentPlayer}</h1>
      <div className="w-full h-auto max-h-[200px] overflow-auto flex flex-col gap-2 ">
        {Object.entries(playerData[currentPlayer - 1]).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between  border-b border-black p-2 items-center"
          >
            <label htmlFor={key}>Nearest no from {key}: </label>
            <input
              type="number"
              max={100}
              className="border-black border rounded-xl p-2 w-[20%]"
              id={key}
              name={key}
              value={value}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setPlayerData((prev) => {
                  const updated = [...prev]; // shallow copy array
                  updated[currentPlayer - 1] = {
                    ...updated[currentPlayer - 1], // shallow copy player object
                    [key]: newValue, // update specific field
                  };
                  return updated;
                });
              }}
            />
          </div>
        ))}
      </div>
      <div className="w-full h-auto max-h-[200px] rounded-xl p-2 border border-black flex flex-col">
        <h1>Possible Hints</h1>
        <div className="w-full h-auto overflow-auto flex flex-col gap-2 ">
          {getValidHints().map((hint) => (
            <h1
              key={Object.keys(hint)[0]}
              className="border-b border-black p-2"
            >
              {Object.keys(hint)[0]}
            </h1>
          ))}
        </div>
      </div>
      <button
        className="rounded-xl bg-purple-700 text-white w-full p-4 hover:cursor-pointer"
        onClick={() => setCurrentPlayer((prev) => ((prev + 1) % players) + 1)}
      >
        Next
      </button>
    </div>
  );
}
