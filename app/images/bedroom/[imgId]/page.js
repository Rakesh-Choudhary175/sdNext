import Image from "next/image";
import Link from "next/link";
import { Router } from "next/navigation";

const ImagePage = async ({ searchParams }) => {
  const data = await searchParams;

  const imgUrl =
    "https://res.cloudinary.com/dbzhqgaqd/image/upload/" + data.img;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex: 99,
      }}
    >
      <Link
        href="/images/bedroom"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          fontSize: "40px",
          cursor: "pointer",
          zIndex: 100,
        }}
      >
        {" "}
        &times;
      </Link>
      <Image
        alt="Next.js Conf photo"
        className="rounded-lg"
        src={imgUrl}
        width={1920}
        height={1080}
        sizes="100vw"
        quality="100"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImagePage;
