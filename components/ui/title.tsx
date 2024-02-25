import { cn } from "@/lib/utils";
import { Philosopher } from "next/font/google";

interface Props extends React.HTMLProps<HTMLHeadingElement> {}

const font = Philosopher({
  weight: ["700"],
  subsets: ["latin"],
});

function Title({ children, id, className, ...restProps }: Props) {
  return (
    <h1
      {...restProps}
      className={cn("text-[96px] font-bold", className, font.className)}
      id={id ?? children?.toString().toLocaleLowerCase()}
    >
      {children}
    </h1>
  );
}

export default Title;
