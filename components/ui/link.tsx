import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
function Link({ children, href, ...restProps }: Props) {
  const isUrl = href?.startsWith("http");

  const externalProps = {
    target: "_blank",
    rel: "noreferrer",
  };

  return (
    <a
      href={href}
      {...(isUrl && externalProps)}
      className={cn(
        "group flex w-min flex-nowrap gap-4 focus:text-accent hover:text-accent transition-colors font-semibold text-2xl items-center"
      )}
      {...restProps}
    >
      <div className="w-10 h-px bg-foreground group-hover:bg-accent group-focus:bg-accent transition-[width,background] group-hover:w-[72px] group-focus:w-[72px]" />
      {children}
    </a>
  );
}

export default Link;
