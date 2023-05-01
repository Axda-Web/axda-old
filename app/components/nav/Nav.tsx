import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="py-5 sm:py-10 text-heading-m sm:flex sm:flex-row sm:align-middle justify-between space-y-5 sm:space-y-0 flex flex-col items-center">
      <div className="text-white hover:text-secondary transition-colors duration-300 text-2xl sm:text-3xl">
        <Link className="text-inherit" href="/">alyxdarenne</Link>
      </div>
      <div className="flex space-x-8">
        <a href="https://github.com/Axda-Web" target="_blank">
          <div className="w-5 sm:w-6 h-5 sm:h-6">
            <Image
              src="/icons/socials/icon-github.svg"
              alt="GitHub Logo"
              width={24}
              height={24}
              priority
            />
          </div>
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Axda-Web"
          target="_blank"
        >
          <div className="w-5 sm:w-6 h-5 sm:h-6">
            <Image
              src="/icons/socials/icon-frontend-mentor.svg"
              alt="Frontend Mentor Logo"
              width={24}
              height={24}
              priority
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/alyx-darenne" target="_blank">
          <div className="w-5 sm:w-6 h-5 sm:h-6">
            <Image
              src="/icons/socials/icon-linkedin.svg"
              alt="LinkedIn Logo"
              width={24}
              height={24}
              priority
            />
          </div>
        </a>
      </div>
    </nav>
  );
};
export default Nav;
