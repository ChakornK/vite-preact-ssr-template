import { useLocation } from "preact-iso";
import { CircleQuestionMarkIcon, HomeIcon, SparklesIcon } from "lucide-react";

export function Header() {
  const { url } = useLocation();

  return (
    <div className="flex justify-between bg-ctp-surface0 px-8 py-4 text-lg">
      <div className="flex items-center gap-4 text-xl">
        <SparklesIcon />
        <p className={"font-bold"}>Preact quickstart template</p>
      </div>
      <div className={"flex gap-4 items-center"}>
        <a
          href="/"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
            url === "/" ? "bg-ctp-surface1" : ""
          }`}
        >
          <HomeIcon size={"1em"} />
          Home
        </a>
        <a
          href="/404"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
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
