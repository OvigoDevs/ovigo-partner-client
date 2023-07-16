import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ParkingDetails = () => {
  return (
    <div className="py-5">
      <p className="font-bold">
        Tell us about the parking situation at your hotel?
      </p>

      <div className="my-5 grid md:grid-cols-2 gap-4">
        <div>
          {/* Parking Container */}
          <div className="border rounded-md p-5 ">
            {/* Is Parking Available or not */}
            <h4 className="font-bold">Is parking available To Guests?</h4>
            <RadioGroup defaultValue="" className="space-y-1 pt-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes, free" id="r1" />
                <Label htmlFor="r1">Yes, Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes, paid" id="r2" />
                <Label htmlFor="r2">Yes, Paid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r3" />
                <Label htmlFor="r3">No</Label>
              </div>
            </RadioGroup>
            <hr className="my-5" />

            {/* Do guests need to reserve a parking spot? */}
            <h4 className="font-bold">
              Do guests need to reserve a parking spot?
            </h4>
            <RadioGroup defaultValue="" className="space-y-1 pt-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="r1" />
                <Label htmlFor="r1">Reservation Needed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="r2" />
                <Label htmlFor="r2">No Reservation Needed</Label>
              </div>
            </RadioGroup>
            <hr className="my-5" />

            {/* Where is the parking located? */}
            <h4 className="font-bold">Where is the parking located?</h4>
            <RadioGroup defaultValue="" className="space-y-1 pt-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onsite" id="r1" />
                <Label htmlFor="r1">Onsite</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="offsite" id="r2" />
                <Label htmlFor="r2">Off Site</Label>
              </div>
            </RadioGroup>
            <hr className="my-5" />

            {/* What type of parking is it? */}
            <h4 className="font-bold">What type of parking is it?</h4>
            <RadioGroup defaultValue="" className="space-y-1 pt-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="r1" />
                <Label htmlFor="r1">Private</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="r2" />
                <Label htmlFor="r2">Public</Label>
              </div>
            </RadioGroup>
          </div>
          {/* Submit Button */}
          <Button className="w-full mt-5">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetails;
