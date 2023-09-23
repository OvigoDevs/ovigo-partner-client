import Backlink from "@/components/core/backlink/backlink";
// import UploadImages from "@/components/core/upload-images/upload-images";
import { Button } from "@/components/ui/button";
import imageUploader from "@/components/ui/imageUploader";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";

const AddPhotos = () => {
  // router
  // const router = useRouter();
  // roomdata
  // const { roomData, rooms } = useSelector((state) => state.registerData);
  // disptach
  // const dispatch = useDispatch();
  // formdata
  // const [formData, setFormData] = useState(
  //   roomData.addPhotos
  //     ? roomData.addPhotos
  //     : {
  //         mainImage: [],
  //         otherImages: [],
  //       }
  // );
  // edited
  // const [edited, setEdited] = useState(false);
  // errors
  // const [errors, setErrors] = useState(edited ? formData : {});
  const fileInputRefs = useRef([]);
  const multiInputRefs = useRef([]);
  const [imageName, setImageName] = useState("");
  const [multiImage, setMultiImage] = useState([]);
  console.log("mlt", multiImage);

  // handleinputs
  const handleOnChange = async (fieldName) => {
    console.log("img file", fieldName);
    toast.error("Please wait a minute");
    if (imageName?.length == 0) {
      const image = await imageUploader(fieldName[0]);
      if (image[1] == "OK") {
        const updatedImage = image[0];
        console.log(updatedImage);
        setImageName(updatedImage);
        toast.success("Now Add Another Picture");
      } else toast.error("Something Wrong");
    }
  };

  const handleMuilOnChange = async (fieldName) => {
    console.log("img file", fieldName);
    toast.error("Please wait a minute");
    if (multiImage?.length == 0) {
      const image = await imageUploader(fieldName[0]);
      if (image[1] == "OK") {
        const updatedImage = [...multiImage, image[0]];
        setMultiImage(updatedImage);
        toast.success("Now Add Another Picture");
      } else toast.error("Something Wrong");
    } else {
      const image = await imageUploader(fieldName[0]);
      if (image[1] == "OK") {
        const updatedImage = [...multiImage, image[0]];
        setMultiImage(updatedImage);
        toast.success("Now Add Another Picture");
      } else toast.error("Something Wrong");
    }
  };

  console.log("Multi Image", multiImage);

  // handle delete img
  const handleDeleteImg = () => {
    fileInputRefs.current.forEach((inputRef) => {
      inputRef.value = "";
    });
    setImageName("");
  };
  const handleMuilDelete = (item) => {
    const mulImage = multiImage.filter((image) => image !== item);
    setMultiImage(mulImage);
  };

  console.log(imageName);
  // handlesubmit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };

  const allImage = multiImage?.map((image) => ({ image: image }));
  console.log("My All Image", allImage);

  return (
    <div className="section-d grid grid-cols-1 gap-5 max-w-[500px] lg:my-16 mb-5">
      <Backlink link="/register/hotel/hotel-details-completion" text="Back" />
      <h2 className="font-semibold">What does your hotel look like?</h2>
      <p>Upload a main photo that makes a good girst impression</p>
      <div className="border border-gray-300 p-3 rounded-sm">
        {imageName ? (
          <div className="h-[70px] w-[100px] rounded-md relative">
            <Image
              src={imageName}
              alt="image"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", borderRadius: "5px" }}
            />
            <button
              className="absolute top-0 left-0 bg-gray-100 w-7 h-7 rounded-full text-sm hover:text-red-500 mb-3"
              type="button"
              onClick={handleDeleteImg}
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
        <input
          type="file"
          onChange={(e) => handleOnChange(e.target.files)}
          className="file-input w-full max-w-xs mt-3"
          ref={(ref) => (fileInputRefs.current[0] = ref)}
        />
      </div>
      <div>
        <p className="mb-3">Add other photos</p>
        <div className="border border-gray-300 rounded-sm p-3">
          <div className="">
            {multiImage.length >= 0 ? (
              <div className="rounded-md flex items-center justify-start gap-3">
                {allImage.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image?.image}
                      alt="image"
                      height={0}
                      width={0}
                      sizes="100vw"
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "5px",
                      }}
                    />
                    <button
                      className="absolute top-0 left-0 bg-gray-100 w-7 h-7 rounded-full text-sm hover:text-red-500 mb-3"
                      type="button"
                      onClick={() => handleMuilDelete(image?.image)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          {Array.from({ length: 1 }).map((_, index) => (
            <input
              key={index}
              type="file"
              onChange={(e) => handleMuilOnChange(e.target.files)}
              className="file-input w-full max-w-xs mt-3"
              ref={(ref) => (multiInputRefs.current[index] = ref)}
            />
          ))}
        </div>
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default AddPhotos;
