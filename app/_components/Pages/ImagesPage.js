import { useEffect, useState } from "react";
import Spinner from "@/app/_components/Spinner";
import BigScreenImg from "../BigScreenImg";
import Img from "../Img";

function ImagesPage({ data }) {
  const [fullScreenImg, setFullScreenImg] = useState(false);
  const [index, setIndex] = useState(0);
  const size = data.length;

  useEffect(() => {
    const handleSwipe = (e) => {
      if (!fullScreenImg) return;

      let touchStartX = 0;
      let touchEndX = 0;

      const handleTouchStart = (event) => {
        touchStartX = event.changedTouches[0].screenX;
      };

      const handleTouchEnd = (event) => {
        touchEndX = event.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          // Swipe left
          setIndex((prevIndex) => (prevIndex < size - 1 ? prevIndex + 1 : 0));
        } else if (touchEndX - touchStartX > 50) {
          // Swipe right
          setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : size - 1));
        }
      };

      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    };

    handleSwipe();
  }, [fullScreenImg, size]);

  return (
    <div>
      {data[0] == null && <Spinner />}
      {fullScreenImg && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-[#D4AF37]"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              border: "none",
              fontSize: "40px",
              cursor: "pointer",
              zIndex: 100,
            }}
            onClick={() => setFullScreenImg(false)}
          >
            &times;
          </button>
          <BigScreenImg
            key={data[index].public_id}
            src={data[index].secure_url}
            alt="Full Screen"
            className="max-w-full max-h-full"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {index + 1} / {size}
          </div>
          <button
            className="absolute left-4 text-[#003D33] text-3xl bg-[#D4AF37] rounded-full p-1"
            style={{
              border: "none",
              cursor: "pointer",
              zIndex: 100,
            }}
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : size - 1
              )
            }
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 text-[#003D33] text-3xl bg-[#D4AF37] rounded-full p-1"
            style={{
              border: "none",
              cursor: "pointer",
              zIndex: 100,
            }}
            onClick={() =>
              setIndex((prevIndex) =>
                prevIndex < size - 1 ? prevIndex + 1 : 0
              )
            }
          >
            &#8250;
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((image, key) => (
          <button
            key={key}
            onClick={() => {
              setFullScreenImg(true);
              setIndex(key);
            }}
          >
            <Img src={image.secure_url} key={image.public_id} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImagesPage;
