"use client";
import Link from "@/components/ui/link";
import Title from "@/components/ui/title";
import { cn } from "@/lib/utils";
import { Variants, motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { Philosopher } from "next/font/google";
import NextLink from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Badge } from "../../ui/badge";
import { ProjectProps, RootProps, TitleProps, WorkProps } from "./types";

const font = Philosopher({
  weight: ["700"],
  subsets: ["latin"],
});

interface Context {
  currentId: number | string | null;
  setCurrentId: (id: number | string | null) => void;
}
const Context = createContext<Context>({
  currentId: null,
  setCurrentId: () => {},
});

const variants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

//TODO: make a standarized container now here is max defined for this component
export function Root({ children }: RootProps) {
  const [currentId, setCurrentId] = useState<Context["currentId"]>(null);
  return (
    <Context.Provider value={{ currentId, setCurrentId }}>
      <section className="max-w-5xl mx-auto space-y-8">{children}</section>
    </Context.Provider>
  );
}

export function Heading({ children, filePath, id }: TitleProps) {
  return (
    <div className="flex justify-between items-center">
      <Title id={id}>{children}</Title>
      {filePath && (
        <NextLink
          href={filePath ?? "#"}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full flex gap-4 items-center bg-middleground p-[6px] pr-6"
        >
          <div className="bg-background rounded-full p-3">
            <Download />
          </div>
          <span className="text-2xl font-extralight">Curiculum Vitae</span>
        </NextLink>
      )}
    </div>
  );
}

export function Work({
  company,
  description,
  from,
  position,
  technologies,
  to,
  workProjects,
}: WorkProps) {
  const { currentId, setCurrentId } = useContext(Context);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin: "0px 0px -400px 0px", once: true });

  const open = () => {
    setCurrentId(id);
  };

  useEffect(() => {
    if (isInView) {
      open();
    }
  }, [isInView]);

  const isOpen = id === currentId;

  return (
    <div
      ref={ref}
      onMouseOver={open}
      onFocus={open}
      tabIndex={0}
      className="bg-middleground p-14 px-18 rounded-[100px]"
    >
      <div className="flex flex-wrap">
        <div className="basis-1/4 flex items-center">
          <div className="text-xl text-stone-400 font-medium ">
            <span>{from.toUpperCase()}</span> - <span>{to.toUpperCase()}</span>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="flex items-center gap-8">
            <h2 className="text-4xl font-bold whitespace-nowrap">{position}</h2>
            <div className="h-px bg-foreground rounded-full w-full" />
            <h3 className="text-xl whitespace-nowrap">{company}</h3>
          </div>
        </div>

        <div className="basis-1/4" />
        <div className="basis-3/4">
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={variants}
            className="-m-1 p-1 overflow-hidden"
          >
            <div className="space-y-7">
              <p className="pt-7 text-xl text-stone-400 font-semibold">
                {description}
              </p>
              <ul className="flex gap-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {workProjects.map((project) => (
                  <li key={project.title}>
                    <Link href={project.link}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Project({
  description,
  link,
  technologies,
  title,
  index,
}: ProjectProps) {
  const { currentId, setCurrentId } = useContext(Context);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin: "0px 0px -400px 0px", once: true });

  const open = () => {
    setCurrentId(id);
  };

  useEffect(() => {
    if (isInView) {
      open();
    }
  }, [isInView]);

  const number = index + 1 < 10 ? `0${index + 1}` : index + 1;
  const isOpen = id === currentId;
  return (
    <div
      ref={ref}
      onMouseOver={open}
      onFocus={open}
      tabIndex={0}
      className="bg-middleground p-6 px-10 rounded-[64px]"
    >
      <div className="flex flex-wrap">
        <div className="basis-1/5 flex items-center pr-4">
          <div className={cn("text-7xl font-bold", font.className)}>
            {number}
          </div>
        </div>
        <div className="basis-4/5">
          <div className="flex items-center gap-8 pr-8 h-full">
            <h2 className="text-4xl font-bold whitespace-nowrap">{title}</h2>
            <div className="h-px bg-foreground rounded-full w-full" />
          </div>
        </div>

        <div className="basis-1/5" />
        <div className="basis-4/5 ">
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={variants}
            className="-m-1 p-1 overflow-hidden"
          >
            <div className="space-y-7 pb-8">
              <p className="pt-7 text-xl text-stone-400 font-semibold pr-8">
                {description}
              </p>
              <ul className="flex gap-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <Link href={link.url}>{link.title}</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
