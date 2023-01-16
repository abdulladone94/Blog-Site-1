import Image from "next/image";
import Link from "next/link";
import Auther from "./_child/auther";

const section1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="pb-12 text-4xl font-bold text-center">Tranding</h1>
        {slide()}
      </div>
    </section>
  );
};

export default section1;

const slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="pr-10 image">
        <Link href={"/"}>
          <Image src={"/images/img1.jpg"} width={600} height={600} />
        </Link>
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - Jan 15, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl font-bold text-gray-800 md:text-6xl hover:text-gray-600"
          >
            Your most unhappy customers are your grates sources of learing
          </Link>
        </div>
        <p className="py-3 text-gray-500">
          Even the all-powerful Painting has no control about the blind texts it
          is an almost unorthographic life One day however a small liine of
          blindtext fy the normal of lorem ipsum decided to leave for the far
          world of Garmmar.
        </p>
        <Auther />
      </div>
    </div>
  );
};
