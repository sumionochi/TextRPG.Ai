"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoveUpRight, Sword, Wand } from "lucide-react";

export default function Main() {
  const createAdventure = useMutation(api.adventure.createAdventure);
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState("warrior");

  return (
    <div className="flex justify-center items-center w-full h-screen font-chakra flex-col gap-8">
      <h1 className="text-4xl text-white">
        Welcome to the Text Based RPG Game
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex justify-center items-center flex-col">
          <Sword/>
          <p>Warrior</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Wand/>
          <p>Wizard</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <MoveUpRight/>
          <p>Arrow</p>
        </div>
      </div>

      <button
        className="bg-gray-500 hover:bg-gray-400 px-2 py-1 rounded-md"
        onClick={async () => {
          const adventureId = await createAdventure({
            character: selectedCharacter,
          });
          router.push(`/adventures/${adventureId}`);
        }}
      >
        Start an Adventure
      </button>
    </div>
  );
}