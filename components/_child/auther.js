import Image from "next/image";
import Link from "next/link";

const auther = () => {
  return (
    <div className="flex py-5 auther">
      <Image
        src={"/images/author/author1.jpg"}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="font-bold text-gray-800 text-md hover:text-gray-500"
        >
          Abdulla MF
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
};

export default auther;
