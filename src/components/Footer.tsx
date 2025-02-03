export default function Footer() {
  return (
    <footer className=" w-full sm:px-6 mx-auto bg-black">
      <div className="grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center py-5 px-24">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2025 Fardous Alom all rights reserved.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
            <a
              className="size-8 rounded-lg border border-transparent bg-white"
              href="https://github.com/Fardous-Alom"
              target="_blank"
            >
              <img src="/github.svg" alt="github" />
            </a>
            <a
              className="size-10 rounded-lg border border-transparent"
              href="https://x.com/Fardoustw"
              target="_blank"
            >
              <img src="/twitter.svg" alt="twitter" />
            </a>
            <a
              className="size-9 rounded-lg border border-transparent"
              href="https://www.linkedin.com/in/fardous-alom/"
              target="_blank"
            >
              <img src="/linkedin.svg" alt="linkedin" />
            </a>
            <a
              className="size-9 rounded-lg border border-transparent"
              href="https://join.skype.com/invite/v6uVAOkTRLbL" target="_blank"
            >
              <img src="/skype.svg" alt="skype" />
            </a>
        </div>
      </div>
    </footer>
  );
}