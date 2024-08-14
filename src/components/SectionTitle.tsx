import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type TProps = { title: string; highlight: string; link: string };

const SectionTitle = ({ title, highlight, link }: TProps) => {
  return (
    <div className="flex  justify-between items-center border-b border-[#008ECC] pb-2">
      <h4 className="text-[#666666] text-base md:text-xl ">
        {title}
        <span className="text-orange-500 text-xl md:text-2xl font-semibold">
          {""} {highlight}
        </span>
      </h4>
      {link ? (
        <Link href={link}>
          <Button variant="ghost" className="flex items-center gap-2">
            <span className="text-base">View All</span>
            <ChevronsRight className="text-orange-500" />
          </Button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default SectionTitle;
