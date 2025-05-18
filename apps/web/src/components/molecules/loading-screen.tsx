import { Progress } from "../ui/progress";

export default function LoadingScreen({ value }: { value?: number }) {
  return (
    <div className="w-full min-h-screen absolute z-[99] flex flex-col justify-center items-center px-4 md:px-8">
      <span className="italic font-bold text-lg pb-2">Bekas</span>
      <Progress value={value} />
    </div>
  );
}
