import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Container from "../../Container";

const Categories = () => {
  return (
    <Container className="my-10">
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center">
        <Link href="/">
          <div className="relative rounded-xl">
            <Image
              src={assets.categories.primary}
              height={250}
              width={250}
              alt="category image"
              className="rounded-xl"
            ></Image>
            <div className="backdrop-blur-md absolute top-[60%] left-[56px] px-8 py-2 text-white  rounded-sm text-center">
              <h2 className="text-[18px] font-bold">Primary</h2>
              <p className="text-sm hover:border-b-2  mt-2">View More</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="relative rounded-xl">
            <Image
              src={assets.categories.secondary}
              height={250}
              width={250}
              alt="category image"
              className="rounded-xl"
            ></Image>
            <div className="backdrop-blur-md absolute top-[60%] left-[56px] px-8 py-2 text-white  rounded-sm text-center">
              <h2 className="text-[18px] font-bold">Secondary</h2>
              <p className="text-sm hover:border-b-2  mt-2">View More</p>
            </div>
          </div>
        </Link>
        <Link href="/">
          <div className="relative rounded-xl">
            <Image
              src={assets.categories.tertiary}
              height={250}
              width={250}
              alt="category image"
              className="rounded-xl"
            ></Image>
            <div className="backdrop-blur-md absolute top-[60%] left-[56px] px-8 py-2 text-white  rounded-sm text-center">
              <h2 className="text-[18px]   font-bold">Tertiary</h2>
              <p className="text-sm hover:border-b-2  mt-2">View More</p>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Categories;
