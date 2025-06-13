"use client";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-[100vw]  h-full min-h-[100svh] flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full max-w-[500px] md:text-2xl text-lg">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                You&apos;ll be hated by your friends if you use this
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <h1 className="">Select number of players :</h1>
        <Link
          href={"/players/3"}
          className="w-full p-4 rounded-2xl border-2 bg-red-500 border-red-900 flex items-center justify-center text-white"
        >
          3 Players
        </Link>
        <Link
          href={"/players/4"}
          className="w-full p-4 rounded-2xl border-2 bg-blue-500 border-blue-900 flex items-center justify-center text-white"
        >
          4 Players
        </Link>
        <Link
          href={"/players/5"}
          className="w-full p-4 rounded-2xl border-2 bg-green-500 border-green-900 flex items-center justify-center text-white"
        >
          5 Players
        </Link>
      </div>
    </div>
  );
}
