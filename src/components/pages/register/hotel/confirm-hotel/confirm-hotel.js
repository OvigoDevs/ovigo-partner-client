import Backlink from "@/components/core/backlink/backlink";
import CustomCheckbox from "@/components/core/custom-checkbox/custom-checkbox";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { confirmHotel } from "@/redux/features/register_slice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ConfirmHotel = () => {
  // router
  const router = useRouter();
  // hotelData
  const { hotelData, rooms, registerData } = useSelector(
    (state) => state.registerData
  );

  //!hotel address
  const { country, district, division, streetAddress, subDistrict, zipCode } =
    hotelData?.hotelAddress;
  console.log(
    "hotel address data:",
    district,
    division,
    subDistrict,
    zipCode,
    streetAddress
  );

  //! hotel Categories
  const { title, description } = hotelData?.hotelCategories;
  console.log("hotel category data:", title, description);

  //! hotel information
  const {
    hotelName,
    hotelRating,
    managementEntityName,
    placeName,
    primaryPlaceName,
    propertyManagementEntity,
    distanceToSpot,
    spotNames,
  } = hotelData?.hotelInformation;
  console.log(
    "Hotel Information data: ",
    hotelName,
    hotelRating,
    managementEntityName,
    distanceToSpot,
    placeName,
    primaryPlaceName,
    propertyManagementEntity,
    spotNames
  );

  //! house rules
  const {
    allowChildren,
    allowPet,
    checkinfrom,
    checkinuntil,
    checkoutfrom,
    checkoutuntill,
  } = hotelData?.houseRules;
  console.log(
    "House Rules data: ",
    allowChildren,
    allowPet,
    checkinuntil,
    checkinfrom,
    checkoutfrom,
    checkoutuntill
  );

  //! parking details
  const { available, located, reserve, type } = hotelData?.parkingDetails;
  console.log("Parking Details data: ", available, located, reserve, type);

  //! here is the popularFacilities  are array[]
  console.log("Popular Facilities data: ", hotelData.popularFacilities);

  //! hotelLanguage []
  console.log("Hotel Language data: ", hotelData.registerLanguages);

  //!noOfHotels
  const { text } = hotelData?.noOfHotels;
  console.log("NO Of Hotel data: ", text);

  //! breakfastDetails
  const { priceIncluded, pricePerPersonAndDay, serveToGuest, breakfastsTypes } =
    hotelData?.breakfastDetails;
  console.log(
    "Breakfast Details data: ",
    priceIncluded,
    pricePerPersonAndDay,
    serveToGuest,
    breakfastsTypes
  );

  // ?room details data start
  //!room data to room details
  const {
    bunkBeds,
    cribsAllowed,
    fullBeds,
    guestsNumber,
    kingBeds,
    queenBeds,
    roomSize,
    roomSizeUnit,
    sameTypeRooms,
    smookingAllow,
    sofaBeds,
    twinBeds,
    unitType,
  } = rooms[0].roomData?.roomDetails;
  console.log(
    "Room Details Data: ",
    bunkBeds,
    cribsAllowed,
    fullBeds,
    guestsNumber,
    kingBeds,
    queenBeds,
    roomSize,
    roomSizeUnit,
    sameTypeRooms,
    smookingAllow,
    sofaBeds,
    twinBeds,
    unitType
  );

  //!bathroom details : [bathroomItems] are array
  const { privateBathroom, bathroomItems } = rooms[0].roomData?.bathroomDetails;
  console.log("Bathroom Details Data: ", privateBathroom, bathroomItems);

  //!room features : [foodAndDrink, outdoorsAndViews]
  const { foodAndDrink, mainView, outdoorsAndViews } =
    rooms[0].roomData?.roomFeatures;
  console.log("Room Features Data: ", foodAndDrink, mainView, outdoorsAndViews);

  //!room name, room price
  const { roomName, roomPrice } = rooms[0].roomData;
  console.log("Room Name and Room Price: ", roomName, roomPrice);

  //!image URL
  console.log("All Image: ", rooms[0].roomData.addPhotos.allImage);
  console.log("Main Image Name:", rooms[0].roomData.addPhotos.imageName);

  // console.log("first", hotelData);
  // console.log("sec", rooms);

  // dispatch
  const dispatch = useDispatch();
  // confirmhotelState
  const [confirmhotel, setConfirmhotel] = useState(
    hotelData.confirmHotel ? hotelData.confirmHotel : []
  );
  const [errorMessage, setErrorMessage] = useState(null);
  // submit & validation
  const handleOnSubmit = () => {
    if (confirmhotel.length !== 2) {
      setErrorMessage("Select all agreements!");
    } else {
      // dispatch
      dispatch(
        confirmHotel({
          confirmHotel: confirmhotel,
        })
      );
      // setCookie
      setCookie(
        "hotelData",
        { ...hotelData, confirmHotel: confirmhotel },
        "1h"
      );
      //TODO: need to hit API to save these data in DB
      console.log({ registerData, hotelData, rooms });

      // console.log("allphoto added:", rooms?.roomData);
      // router
      // router.push("/dashboard");
    }
  };
  return (
    <div className="py-5 max-w-[500px]">
      <Backlink
        link="/register/hotel/important-info"
        text="Important information"
      />
      <div className="grid grid-cols-1 gap-4">
        <div className="border rounded-md p-5 space-y-4">
          <h4 className="text-lg">
            That&apos;s it! You&apos;ve done everything you need to before your
            first guest stays.
          </h4>
          <p>After you finish your registration you&apos;ll be able to:</p>

          <div className="space-y-3">
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/phone.svg"
                alt="Phone Icon"
              />
              <p>Manage your property from your dashboard.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/eye-and-money.svg"
                alt="Phone Icon"
              />
              <p>Get bookings and make money from guests browsing our site.</p>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                width={40}
                height={40}
                src="/images/calander-icon.svg"
                alt="Phone Icon"
              />
              <p>
                Stay on top of bookings from all the sites you use by syncing
                your calander.
              </p>
            </div>
          </div>
          <hr />

          <CustomCheckbox
            options={[
              "I certify that this is a legitimate accomodation business with all necessary licenses and permits, which can be shown upon request. Ovigo reserves the right to verify and investigate any details provided in this registration.",
              "I have read, accepted, and agreed to the General Delivery Terms.",
            ]}
            name="confirmhotel"
            label="Please check all the agreement"
            defaultValue={confirmhotel}
            handleOnChange={(e) => setConfirmhotel(e.target.value)}
          />
          <InputError error={errorMessage} />
        </div>
      </div>
      <div className="pt-5">
        <Button className="w-full" onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ConfirmHotel;
