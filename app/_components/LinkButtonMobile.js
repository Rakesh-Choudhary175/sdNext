import { Button, Link } from "react-scroll";

function LinkButtonMobile({ link, closeMenu, children }) {
  return (
    <Button className="block text-white hover:text-[#D4AF37] py-2 transition-colors">
      <Link
        to={link}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => closeMenu(false)}
      >
        {children}
      </Link>
    </Button>
  );
}

export default LinkButtonMobile;
