import Image from "next/image";

type THeroItemsProps = {
  img: string;
  name: string;
  des: string;
};
const HeroItemCard = ({ img, name, des }: THeroItemsProps) => {
  return (
    <div className="text-center rounded-2xl m-5 mt-10">
      <div className="-mt-10 flex flex-col justify-between font-inter">
        <Image className="w-[200px] h-auto mx-auto" alt={name} src={img} />
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default HeroItemCard;
