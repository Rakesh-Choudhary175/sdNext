export async function getImageData() {
  try {
    const cloudName = "dbzhqgaqd"; // Replace with actual cloud name
    const apiKey = "826283531429994";
    const apiSecret = "Jbh6_PrnCexcyt8R0pBlfV-0nwc";
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Cloudinary resources");
    }

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    return "error";
  }

  // try {
  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     }
  //   );
  //   return res;
  // } catch (error) {
  //   return error;
  // }
  // const response = await fetch(
  //   "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
  //     },
  //   }
  // );
  // console.log(response);
  // const response = await fetch(
  //   "https://api.cloudinary.com/v1_1/dbzhqgaqd/resources/image",
  //   {
  //     headers: {
  //       Authorization: "Basic 826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc",
  //     },
  //   }
  // );
  // const data = await response.json();
  // console.log(data);
  // return data;
}
