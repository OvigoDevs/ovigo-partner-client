import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import IconWrapper from "../icon-wrapper/icon-wrapper";
import InputError from "../input-error/input-error";

const UploadImages = ({ func, name, defaultValue }) => {
  const [postImage, setPostImage] = useState({
    myFile: defaultValue ? defaultValue : [],
  });
  const [imageName, setImageName] = useState("Upload picture");
  const [errors, setErrors] = useState(null);

  const handleFileUpload = async (e) => {
    let files = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];

      if (file.size < 5 * 1024 * 1024) {
        const base64 = await convertToBase64(file);
        console.log(base64);
        files.push(base64);
        setErrors(null);
      } else {
        setErrors(`File size can't be more than 5 MB!`);
      }
    }
    setPostImage({ ...postImage, myFile: [...postImage.myFile, ...files] });
  };

  useEffect(() => {
    func({
      target: {
        name: name,
        value: postImage.myFile,
      },
    });
  }, [postImage]);
  return (
    <div className="rounded-md border dark:border-gray-800 p-2">
      {postImage.myFile.length ? (
        <div className="flex flex-wrap items-center justify-start gap-1">
          {postImage.myFile.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div
                  className="absolute right-0 top-0 m-1 cursor-pointer text-gray-400 hover:text-red-400"
                  onClick={() => {
                    setPostImage({
                      ...postImage,
                      myFile: [
                        ...postImage.myFile.filter((image) => image !== item),
                      ],
                    });
                  }}
                >
                  <IconWrapper>
                    <X className="bg-white border rounded-full dark:text-gray-600" />
                  </IconWrapper>
                </div>

                <Image
                  src={item}
                  alt="image"
                  height={100}
                  width={100}
                  className="h-[100px] w-[100px] rounded-md"
                />
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="relative mt-5 rounded-md border px-3 py-1">
        {imageName !== "Upload picture" ? (
          <span className="font-medium">Uploaded Picture:</span>
        ) : null}{" "}
        {imageName}
        <input
          type="file"
          label="Image"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg, .webp"
          multiple={true}
          onChange={handleFileUpload}
          className="absolute left-0 top-0 h-full w-full cursor-pointer border opacity-0"
        />
      </div>
      <InputError error={errors} />
    </div>
  );
};

export default UploadImages;

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
