import { ChevronLeft } from "lucide-react";
import IconWrapper from "../icon-wrapper/icon-wrapper";
import Link from "next/link";

const Backlink = ({link, text}) => {
    return (
        <Link
        href={link}
        className="flex items-center gap-2 hover:underline mb-10"
      >
        {" "}
        <IconWrapper>
          <ChevronLeft />
        </IconWrapper>{" "}
        {text}
      </Link>
    )
}

export default Backlink;