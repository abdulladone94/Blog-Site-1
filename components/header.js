import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";

const header = () => {
  return (
    <header className="bg-gray-100">
      <div className="flex flex-col items-center py-3 text-center xl:container xl:mx-auto sm:flex-row sm:justify-between">
        <div className="flex justify-center order-2 py-4 md:flex-none w-96 sm:order-1 sm:py-0">
          <input className="input-text" type="text" placeholder="search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"} className="text-3xl font-bold uppercase">
            Design
          </Link>
        </div>
        <div className="flex justify-center order-3 w-96 ">
          <div className="flex gap-6">
            <Link href={"/facebook"}>
              <ImFacebook color="#70DB93" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#70DB93" />
            </Link>
            <Link href={"/"}>
              <ImYoutube color="#70DB93" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
