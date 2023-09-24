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

  console.log("first", hotelData);
  console.log("sec", rooms);

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

      //!hotel address
      const {
        country,
        district,
        division,
        streetAddress,
        subDistrict,
        zipCode,
      } = hotelData.hotelAddress;

      //! hotel Categories
      const { title, description } = hotelData.hotelCategories;

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
      } = hotelData.hotelInformation;

      //! house rules
      const {
        allowChildren,
        allowPet,
        checkinfrom,
        checkinuntil,
        checkoutfrom,
        checkoutuntill,
      } = hotelData.houseRules;

      //! parking details
      const { available, located, reserve, type } = hotelData.parkingDetails;

      //! here is the popularFacilities  are array[]
      hotelData.popularFacilities;

      //! hotelLanguage []
      hotelData.registerLanguages;

      //!noOfHotels
      const { text } = hotelData.noOfHotels;

      //! breakfastDetails
      const {
        priceIncluded,
        pricePerPersonAndDay,
        serveToGuest,
        breakfastsTypes,
      } = hotelData.breakfastDetails;

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
      } = roomData.roomDetails;

      //!bathroom details : [bathroomItems] are array
      const { privateBathroom, bathroomItems } = roomData.bathroomDetails;

      //!room features : [foodAndDrink, outdoorsAndViews]

      const { foodAndDrink, mainView, outdoorsAndViews } =
        roomData.roomFeatures;

      //!room name, room price
      const { roomName, roomPrice } = roomData;

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
