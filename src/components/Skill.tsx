import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function Skill() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        Skills
      </span>

      <OrbitingCircles iconSize={40}>
        <Icons.next />
        <Icons.typescript />
        <Icons.tailwind />
        <Icons.react />
        <Icons.javascript />
        <Icons.redux />
        <Icons.mysql />
      </OrbitingCircles>

      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.bootstrap />
        <Icons.figma />
        <Icons.firebase />
        <Icons.python />
        <Icons.nodejs />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  next: () => <img src="/next.svg" alt="next" />,
  typescript: () => <img src="/typescript.svg" alt="typescript" />,
  bootstrap: () => <img src="/bootstrap.svg" alt="bootstrap" />,
  figma: () => <img src="/figma.svg" alt="figma" />,
  firebase: () => <img src="/firebase.svg" alt="firebase" />,
  javascript: () => <img src="/javascript.svg" alt="javascript" />,
  mongodb: () => <img src="/mongodb.svg" alt="mongodb" />,
  mysql: () => <img src="/mysql.svg" alt="mysql" />,
  nodejs: () => <img src="/nodejs.svg" alt="nodejs" />,
  python: () => <img src="/python.svg" alt="python" />,
  redux: () => <img src="/redux.svg" alt="redux" />,
  react: () => <img src="/react.svg" alt="react" />,
  tailwind: () => <img src="/tailwind.svg" alt="tailwind" />,
};
