import Image from "next/image";
import Link from "next/link";
function Img({ src }) {
  return (
    // <a>
    //   <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
    //     <Image
    //       alt="img"
    //       src={`http://res.cloudinary.com/dbzhqgaqd/image/upload/v1725471005/cld-sample-5.jpg`}
    //       layout="fill"
    //       objectFit="cover"
    //       className={cn(
    //         "duration-700 ease-in-out group-hover:opacity-75",
    //         isLoading
    //           ? "scale-110 blur-2xl grayscale"
    //           : "scale-100 blur-0 grayscale-0"
    //       )}
    //       onLoadingComplete={() => setLoading(false)}
    //     />
    //   </div>
    // </a>
    // <Link>
    <>
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
      {/* </Link> */}
    </>
  );
}

export default Img;
