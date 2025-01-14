import Link from "next/link";

function LinkButtonMobile({ link, children }) {
  return (
    <Link
      href={link}
      className="block text-white hover:text-[#D4AF37] py-2 transition-colors"
    >
      {children}
    </Link>
  );
}

export default LinkButtonMobile;
