import { Children, cloneElement, isValidElement } from "react";

type Props = {
  empty?: boolean;
};
function FancyIcon({ children, empty }: React.PropsWithChildren<Props>) {
  return empty ? (
    <div className="w-[153px] h-[153px]" />
  ) : (
    <div className="bg-gradient-to-b w-[153px] h-[153px] rounded-2xl p-1 from-[#333333] to-[#111111">
      <div className="bg-[#111111] rounded-2xl h-full flex items-center justify-center fill-accent text-accent">
        {Children.map(children, (child: React.ReactNode) =>
          isValidElement(child)
            ? cloneElement(child as React.ReactElement, {
                width: 94,
                height: 94,
              })
            : child
        )}
      </div>
    </div>
  );
}

export default FancyIcon;
