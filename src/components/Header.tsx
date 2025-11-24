import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <div className={"bg-ctp-surface0 px-8 py-4 flex text-lg justify-between"}>
      <p className={"font-bold"}>Preact quickstart template</p>
      <div className={"flex gap-8 items-center"}>
        <a href="/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </div>
    </div>
  );
}
