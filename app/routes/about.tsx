import clsx from "clsx";
import Image from "remix-image";

export default function About() {
  return (
    <div
      className={clsx(
        "mx-10 flex flex-col text-2xl",
        " py-20 dark:text-gray-300 md:mx-auto md:max-w-4xl md:gap-8"
      )}
    >
      <div className="gap flex flex-col md:flex-row">
        <Image
          src="matt.jpg"
          alt="Matt Deal"
          width={500}
          height={500}
          className="rounded-3xl transition-all duration-500 hover:scale-125 md:m-3"
        />
        <div className="flex flex-col gap-5">
          <p>
            My name is Matt Deal and as a frontend developer, my primary goal is
            to use code to make the world a better place.
          </p>
          <p>
            I am constantly seeking new ways to improve the user experience and
            create more intuitive and accessible designs.
          </p>
        </div>
      </div>

      <p>
        In my personal life, I am a proud father of three and am always looking
        for ways to balance my passion for coding with my role as a parent.
      </p>

      <div className="mb-5 flex flex-col gap-5 md:mb-0 md:flex-row">
        <div className="flex flex-col gap-5">
          <p>
            In my free time, I love hitting the open road on my 2008 ZX6r
            motorcycle. There's nothing quite like the feeling of the wind in my
            hair and the thrill of the ride.
          </p>
          <p>
            Here is a picture of me at Phillip Island Race Track, in Australia
          </p>
        </div>
        <Image
          className="rounded-2xl transition-all duration-500 hover:scale-125"
          alt="motorbike"
          src="bike.jpg"
          width={1800}
        />
      </div>

      <p>
        I am also excited to share my frontend development{" "}
        <a
          className="text-purple-400 hover:text-purple-500 dark:text-blue-200 dark:hover:text-blue-300"
          href="https://www.youtube.com/channel/UCt54LUGfJBgA2HU0eu_RXyg"
        >
          YouTube channel
        </a>
        , where I share tips, tricks, and tutorials for fellow developers.
      </p>
    </div>
  );
}
