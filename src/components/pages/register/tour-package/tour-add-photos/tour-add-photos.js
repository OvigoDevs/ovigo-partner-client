import UploadImages from "@/components/core/upload-images/upload-images";
import Hints from "../common/hints/hints";
import { Button } from "@/components/ui/button";
import Backlink from "@/components/core/backlink/backlink";

const TourAddPhotos = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="section-d">
        <Backlink link="/" text="Back" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <h4 className="font-bold">Add Photos</h4>
            <p>
              Visuals such as photos showcasing the destinations and activities
              of the tour.
            </p>
            <UploadImages func={handleOnChange} name="addPhotoes" />
          </div>
        </div>
        <div>
          <Hints />
        </div>
      </div>
      <Button>Next</Button>
    </div>
  );
};

export default TourAddPhotos;
