import InputError from "@/components/core/input-error/input-error";
import UploadImages from "@/components/core/upload-images/upload-images";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { addPhotos } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddPhotos = () => {
  // router
  const router = useRouter();
  // roomdata
  const { roomData } = useSelector((state) => state.registerData);
  // disptach
  const dispatch = useDispatch();
  // formdata
  console.log(roomData)
  const [formData, setFormData] = useState(
    roomData.addPhotos
      ? roomData.addPhotos
      : 
      {
          mainImage: [],
          otherImages: [],
        }
  );
  // edited
  const [edited, setEdited] = useState(false);
  // errors
  const [errors, setErrors] = useState(edited ? formData : {});
  // handleinputs
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // handlesubmit
  const handleOnSubmit = () => {
    setErrors(validator(formData));
  };
  // validation
  const validator = (data) => {
    let obj = {};
    if (!data.mainImage.length) {
      obj.mainImage = "Main image is required!";
    }
    if (!data.otherImages.length) {
      obj.otherImages = "Other images are required!";
    } else if (data.otherImages.length < 3) {
      obj.otherImages = "At least add 3 images";
    } else if (data.otherImages.length > 5) {
      obj.otherImages =
        "Maximum 5 images can be added! Remove rest of the images please!";
    }
    return obj;
  };
  // useEffect > dispatch > setCookie > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        addPhotos({
          addPhotos: formData,
        })
      );
      // setCookie
      setCookie("roomData", { ...roomData, addPhotos: formData });
      // router
      router.push("/register/guest-payment");
    }
  }, [errors]);
  // useEffect > setEdited
  useEffect(() => {
    setEdited(true);
  }, []);
  return (
    <div className="section-d grid grid-cols-1 gap-5 max-w-[500px]">
      <h2 className="font-semibold">What does your hotel look like?</h2>
      <div>
        <p>Upload a main photo that makes a good girst impression</p>
        <UploadImages
          func={handleOnChange}
          name="mainImage"
          defaultValue={formData.mainImage}
        />
        <InputError error={errors.mainImage} />
      </div>
      <div>
        <p>Add other photos</p>
        <UploadImages
          func={handleOnChange}
          name="otherImages"
          defaultValue={formData.otherImages}
        />
        <InputError error={errors.otherImages} />
      </div>
      <Button onClick={handleOnSubmit}>Next</Button>
    </div>
  );
};

export default AddPhotos;
