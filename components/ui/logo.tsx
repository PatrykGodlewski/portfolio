import { cn } from "@/lib/utils";
import { Philosopher } from "next/font/google";
import Link from "next/link";

const font = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function Logo() {
  return (
    <Link href={"/"} className={cn("flex gap-2 items-center", font.className)}>
      <div className="w-1 h-1 bg-accent rounded-full mx-2" />
      <span className="text-[36px]">P</span>
      <div className="flex">
        <div className="rounded-[16px_0px_16px_0px] bg-foreground h-1 w-4 -rotate-45" />
        <div className="rounded-[16px_0px_16px_0px] bg-foreground h-1 w-4 -rotate-45" />
      </div>
      <span className="text-[36px]">G</span>
      <div className="w-1 h-1 bg-accent rounded-full mx-2" />
    </Link>
  );
}

export default Logo;
