import { Link } from "react-router-dom";

type MissionProps = {
  cardElement: React.MutableRefObject<HTMLDivElement | null>;
};

export default function Mission({ cardElement }: MissionProps) {
  return (
    <div
      ref={cardElement}
      className="mb-24 flex flex-col gap-5 px-5 dark:text-white"
    >
      <h1 className="text-5xl font-medium md:text-7xl">My Mission</h1>
      <div className="mb-5 flex flex-col gap-5 border-b-2 border-b-white text-2xl md:text-3xl">
        <p>
          The purpose of this site is to help people learn how to code via blog
          posts, courses and videos, with a strong focus on React, Remix,
          TypeScript, JavaScript and Tailwind CSS (and more).
        </p>
        <p>
          I have a huge passion for teaching, and I hope that in the future I
          can make it my full time career.
        </p>
      </div>

      <h2 className="text-4xl font-medium text-gray-300">Who Am I?</h2>
      <div className="flex flex-col gap-5 text-xl text-gray-300 md:text-2xl">
        <p>
          My name is Matt Deal I am a Frontend Developer with a passion for
          helping people.
        </p>

        <p>
          I have being doing Frontend Development for many years now, and now I
          wish to share my knowledge with you!
        </p>

        <p>
          You can find more about me, over on my about me page{" "}
          <Link
            className="text-purple-400 hover:text-purple-500 dark:text-blue-200 dark:hover:text-blue-300"
            to="/about"
          >
            Here
          </Link>
        </p>
      </div>
    </div>
  );
}
