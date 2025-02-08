function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className=" fixed bottom-0  w-full -ml-[8px] mb-5 tracking-tight lg:bottom-0">
      <ul className="lg:sticky lg:bottom-20">
        
        <li>
          <a
            className="flex flex-row space-x-0 pr-10 items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative transition-all hover:text-blue-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Parastou-tech"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-0 pr-10 transition-all hover:text-blue-400 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/parastou-fard/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 ">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
