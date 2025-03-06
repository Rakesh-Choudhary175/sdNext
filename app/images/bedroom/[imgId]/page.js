const ImagePage = ({ params }) => {
  const id = params.imgId;

  return (
    <div>
      <h1>Image Page</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default ImagePage;
