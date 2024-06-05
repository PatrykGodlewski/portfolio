import Contact from "@/components/composite/contact";
import Experience from "@/components/composite/experience";
import { Project, Work } from "@/components/composite/experience/types";
import Landing from "@/components/composite/landing";
import { LOCALES } from "@/lib/constants";
import { useLocale, useTranslations } from "next-intl";

const workExp_EN: Work[] = [
  {
    from: "2022",
    to: "present",
    position: "Frontend Developer",
    company: "GrupaIT",
    description:
      "As a Frontend Developer, I lead projects using NextJS and Svelte frameworks, ensuring high-quality deliverables within timelines and budget. I also develop cross-platform mobile apps with React Native. Previously, as a Junior Frontend Developer, I optimized codebase performance, conducted automated testing, and built web apps with React/Svelte and Typescript, focusing on responsive and accessible UIs.",
    technologies: ["React", "Next.js", "React Native", "Svelte", "TypeScript"],
    workProjects: [
      { title: "Josera", link: "https://josera.com" },
      { title: "Gryzli", link: "https://gryzli.pl" },
    ],
  },
  {
    from: "2020",
    to: "present",
    position: "UX/UI Designer",
    company: "Self employed",
    description:
      "As a self-employed UX/UI designer, I create user-friendly digital interfaces for clients, blending creativity and technical skill to enhance product effectiveness and appeal.",
    technologies: ["Figma", "Material Design", "Photoshop", "Illustrator"],
    workProjects: [
      { title: "Behance", link: "https://www.behance.net/Godlew" },
    ],
  },
];

const workExp_PL: Work[] = [
  {
    from: "2022",
    to: "obecnie",
    position: "Frontend Developer",
    company: "GrupaIT",
    description:
      "Jako Frontend Developer prowadzę projekty z użyciem frameworków NextJS i Svelte, dbając o wysoką jakość dostarczanych rozwiązań w ustalonych terminach i budżecie. Tworzę również wieloplatformowe aplikacje mobilne w React Native. Wcześniej, jako Junior Frontend Developer, optymalizowałem wydajność kodu, przeprowadzałem testy automatyczne i budowałem aplikacje webowe w React/Svelte i TypeScript, koncentrując się na responsywnych i dostępnych interfejsach użytkownika.",
    technologies: ["React", "Next.js", "React Native", "Svelte", "TypeScript"],
    workProjects: [
      { title: "Josera", link: "https://josera.com" },
      { title: "Gryzli", link: "https://gryzli.pl" },
    ],
  },
  {
    from: "2020",
    to: "obecnie",
    position: "UX/UI Designer",
    company: "Samozatrudnienie",
    description:
      "Jako niezależny UX/UI designer tworzę przyjazne dla użytkownika interfejsy cyfrowe dla klientów, łącząc kreatywność i umiejętności techniczne w celu zwiększenia skuteczności i atrakcyjności produktów.",
    technologies: ["Figma", "Material Design", "Photoshop", "Illustrator"],
    workProjects: [
      { title: "Behance", link: "https://www.behance.net/Godlew" },
    ],
  },
];

const workExp = {
  [LOCALES.en]: workExp_EN,
  [LOCALES.pl]: workExp_PL,
};

const projects_EN: Project[] = [
  {
    title: "Qwik ui",
    description:
      "In this project, I detected and reported bugs, analyzed issues, and consistently implemented solutions while ensuring high code quality through adherence to programming standards and actions to enhance readability, performance, and scalability",
    link: { title: "Github", url: "https://github.com/qwikifiers/qwik-ui" },
    technologies: ["Qwik", "SSR", "Resumability"],
  },
];
const projects_PL: Project[] = [
  {
    title: "Qwik ui",
    description:
      "W tym projekcie wykrywałem i zgłaszałem błędy, analizowałem problemy oraz konsekwentnie wdrażałem rozwiązania, zapewniając wysoką jakość kodu poprzez przestrzeganie standardów programowania oraz działania mające na celu poprawę czytelności, wydajności i skalowalności",
    link: { title: "Github", url: "https://github.com/qwikifiers/qwik-ui" },
    technologies: ["Qwik", "SSR", "Resumability"],
  },
];

const projects = {
  [LOCALES.en]: projects_EN,
  [LOCALES.pl]: projects_PL,
};

export default function Home() {
  const t = useTranslations("common");
  const locale = useLocale() as LOCALES;

  return (
    <main id="content">
      <Landing />
      <div className="space-y-60">
        <Experience.Root>
          <Experience.Title id={"work"} filePath="/Resume.pdf">
            {t("work")}
          </Experience.Title>
          {workExp[locale].map((work, index) => (
            <Experience.Work key={index} {...work} />
          ))}
        </Experience.Root>
        <Experience.Root>
          <Experience.Title id={"projects"}>{t("projects")}</Experience.Title>
          {projects[locale].map((project, index) => (
            <Experience.Project key={index} index={index} {...project} />
          ))}
        </Experience.Root>
      </div>
      <Contact />
    </main>
  );
}
