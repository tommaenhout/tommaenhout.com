import React from "react";
import BackgroundSpline from "../components/BackgroundSpline";


export default function Home() {
  return (
    <>
      <main className="flex sticky top-0 min-h-screen bg-black  flex-col items-center justify-center p-24">
        <BackgroundSpline />
      </main>
      <div  
        className="sticky top-0 right-0 p-4 text-white text-xs bg-black min-h-screen bg-opacity-50">
          hola
      </div>
    </>
  );
}
