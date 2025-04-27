import Image from "next/image";
function Img({ src }) {
  return (
    <Image
      alt="img"
      style={{ transform: "translate3d(0, 0, 0)" }}
      className="transform rounded-lg brightness-90 transition group-hover:brightness-110"
      src={src}
      width={720}
      height={480}
      // loading={5 < 4 ? "eager" : "lazy"}
      sizes="(max-width: 640px) 100vw,
      (max-width: 1280px) 50vw,
      (max-width: 1536px) 33vw,
      25vw"
    />
  );
}

export default Img;
