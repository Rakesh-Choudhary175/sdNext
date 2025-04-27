import Image from "next/image";

function BigScreenImg({ src }) {
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
      <Image
        alt="Next.js Conf photo"
        className="rounded-lg"
        src={src}
        width={1920}
        height={1080}
        sizes="100vw"
        quality="100"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default BigScreenImg;
