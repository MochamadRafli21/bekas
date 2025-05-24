import { useState, useEffect } from "react"; // Import useState and useEffect
import { Progress } from "../ui/progress";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0); // Initialize progress state to 0

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.floor(Math.random() * 5) + 1;
        if (newProgress >= 99) {
          clearInterval(interval);
          return 99;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen absolute z-[99] flex flex-col justify-center items-center px-4 md:px-8">
      <span className="italic font-bold text-lg pb-2">Bekas</span>
      <Progress value={progress} />
    </div>
  );
}
