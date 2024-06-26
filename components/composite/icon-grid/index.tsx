import Github from "@/components/svg/github";
import LinkedIn from "@/components/svg/linkedin";
import Twitter from "@/components/svg/twitter";
import { Mail } from "lucide-react";
import { Fragment } from "react";
import FancyIcon from "./fancy-icon";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
function IconGrid({ children, ...restProps }: Props) {
  const grid = [
    [null, null, Twitter],
    [null, LinkedIn, "empty"],
    [Github, "empty", Mail],
  ];
  return (
    <div className="space-y-4" {...restProps}>
      {grid.map((row, index) => (
        <IconRow key={index}>
          {row.map((Component, innerIdx) => (
            <Fragment key={index + innerIdx}>
              {Component && (
                <IconItem>
                  <FancyIcon empty={Component === "empty"}>
                    {Component && <Component />}
                  </FancyIcon>
                </IconItem>
              )}
            </Fragment>
          ))}
        </IconRow>
      ))}
    </div>
  );
}

function IconRow({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end space-x-4">{children}</div>;
}
function IconItem({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-[#040404] dark:bg-[#f4f4f4] rounded-[58px] p-[52px] flex items-center justify-center">
      {children}
    </div>
  );
}

export default IconGrid;
