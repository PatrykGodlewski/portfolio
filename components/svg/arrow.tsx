import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
function Arrow({ className }: Props) {
  return (
    <svg
      width="8"
      height="28"
      viewBox="0 0 8 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path
        d="M3.64645 27.3536C3.84171 27.5488 4.15829 27.5488 4.35355 27.3536L7.53553 24.1716C7.7308 23.9763 7.7308 23.6597 7.53553 23.4645C7.34027 23.2692 7.02369 23.2692 6.82843 23.4645L4 26.2929L1.17157 23.4645C0.97631 23.2692 0.659727 23.2692 0.464465 23.4645C0.269203 23.6597 0.269203 23.9763 0.464465 24.1716L3.64645 27.3536ZM3.5 -2.18557e-08L3.5 27L4.5 27L4.5 2.18557e-08L3.5 -2.18557e-08Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Arrow;
