import Link from "next/link";

function LinkButton({ link, children }) {
  return (
    <Link
      href={link}
      className="text-white hover:text-[#D4AF37] transition-colors"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
