"use client";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="fixed z-50 h-[65px] w-full bg-['#111'] px-10 backdrop-blur-sm">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a href="/" className="flex h-auto w-auto flex-row items-center gap-3">
          👨‍💻
          <h2 className="bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-xl font-extrabold text-transparent">
            Johan.
          </h2>
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:j.brazillier@gmail.com")}
            className=" padding-10 z-[1] cursor-pointer rounded-xl bg-black bg-transparent px-5  py-2  text-white hover:bg-[#2E2E2E]"
          >
            Contact 📧
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
