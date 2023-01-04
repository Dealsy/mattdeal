import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { Theme, useTheme } from "utils/theme-provider";
import Button from "./reusable_components/Button";
import clsx from "clsx";
import { useOptionalUser } from "~/utils";

type MobileNavProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function MobileNav({ open, setOpen }: MobileNavProps) {
  const [theme, setTheme] = useTheme();
  const user = useOptionalUser();

  const themeToggole = theme === Theme.LIGHT;

  const toggleTheme = () => {
    setTheme((prevTheme: any) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <>
      <div className="flex flex-row justify-between border-2 border-b-discord dark:border-b-amazon">
        <Link
          prefetch="intent"
          to="/"
          className="p-5 text-2xl font-bold dark:text-white"
        >
          {user ? user.email : "Mattdeal.com.au"}
        </Link>
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(true)}>
            <Bars3Icon className="h-14 w-14  text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl dark:bg-gray-600 dark:text-white">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                            <Button
                              text={themeToggole ? "Light" : "Dark"}
                              className={clsx(
                                "mr-[12.5rem] rounded-md bg-discord p-2 text-white ",
                                "hover:scale-105 hover:bg-dropbox",
                                "dark:bg-amazon dark:hover:bg-yellow-500"
                              )}
                              onClick={toggleTheme}
                            />
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div
                            className="h-full border-2 border-discord  text-center dark:border-amazon"
                            aria-hidden="true"
                          >
                            <div className="flex flex-col gap-5 p-10 text-6xl text-gray-900 dark:text-white">
                              <Link onClick={() => setOpen(false)} to="/">
                                Home
                              </Link>
                              <Link onClick={() => setOpen(false)} to="/posts">
                                Blog
                              </Link>
                              <Link onClick={() => setOpen(false)} to="/about">
                                About
                              </Link>
                            </div>
                            <div className="flex flex-row gap-2">
                              {user ? (
                                <>
                                  <ArrowLeftOnRectangleIcon className="absolute left-10 bottom-8 h-14 w-14  text-red-500" />
                                  <button className="absolute bottom-0 left-20 py-10 px-10 text-5xl text-red-500">
                                    Logout
                                  </button>
                                </>
                              ) : (
                                <div className="flex flex-col">
                                  <Link
                                    onClick={() => setOpen(false)}
                                    className="absolute bottom-20 left-14 px-10 text-5xl"
                                    to="/login"
                                  >
                                    {" "}
                                    Login{" "}
                                  </Link>
                                  <Link
                                    onClick={() => setOpen(false)}
                                    className="absolute bottom-5 left-8 px-10 text-5xl"
                                    to="/join"
                                  >
                                    Sign up
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
