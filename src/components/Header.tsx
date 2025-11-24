import { useLocation } from "preact-iso";
import { CircleQuestionMarkIcon, HomeIcon, SparklesIcon } from "lucide-react";

export function Header() {
  const { url } = useLocation();

  return (
    <div className="bg-ctp-surface0 flex justify-between px-8 py-4 text-lg">
      <div className="flex items-center gap-4 text-xl">
        <SparklesIcon />
        <p className={"font-bold"}>Preact quickstart template</p>
      </div>
      <div className={"flex items-center gap-4"}>
        <a
          href="/"
          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${
            url === "/" ? "bg-ctp-surface1" : ""
          }`}
        >
          <HomeIcon size={"1em"} />
          Home
        </a>
        <a
          href="/404"
          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${
            url === "/404" ? "bg-ctp-surface1" : ""
          }`}
        >
          <CircleQuestionMarkIcon size={"1em"} />
          404
        </a>
      </div>
    </div>
  );
}
