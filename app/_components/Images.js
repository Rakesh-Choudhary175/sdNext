async function Images() {
  const data = await fetch(
    "https://826283531429994:Jbh6_PrnCexcyt8R0pBlfV-0nwc@api.cloudinary.com/v1_1/dbzhqgaqd/resources/image"
  );

  return data;
}

export default Images;
