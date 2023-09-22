import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import IconWrapper from "../icon-wrapper/icon-wrapper";

const Backlink = ({link, text}) => {
    return (
        <Link
        href={link}
        className="flex items-center gap-2 hover:underline lg:mb-5 mb-3"
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