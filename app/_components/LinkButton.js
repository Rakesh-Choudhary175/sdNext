// import Link from "next/link";
import { Button, Link } from "react-scroll";

function LinkButton({ link, children }) {
  return (
    <Button className="text-white hover:text-[#D4AF37] transition-colors">
      <Link to={link} spy={true} smooth={true} duration={500}>
        {children}
      </Link>
    </Button>
    // <Link
    //   href={link}
    //   className="text-white hover:text-[#D4AF37] transition-colors"
    // >
    //   {children}
    // </Link>
  );
}

export default LinkButton;
