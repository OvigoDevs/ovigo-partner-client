import UploadImages from "@/components/core/upload-images/upload-images";

const AddPhotos = () => {
  const handleOnChange = (e) => {};
  return (
    <div className="section-d grid grid-cols-1 gap-5 max-w-[500px]">
      <h2>What does your hotel look like?</h2>
      <div>
        <p>Upload a main photo that makes a good girst impression</p>
        <UploadImages
          func={handleOnChange}
          name="main-image"
        //   defaultValue={[]}
        />
      </div>
      <div>
        <p>Add other photos</p>
        <UploadImages
          func={handleOnChange}
          name="main-image"
        //   defaultValue={[]}
        />
      </div>
    </div>
  );
};

export default AddPhotos;
