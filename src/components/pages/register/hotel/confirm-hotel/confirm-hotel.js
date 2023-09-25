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
 
const {popularFacilities} = hotelData;

// console.log("sdf", hotelData?.registerLanguages)
const {registerLanguages} = hotelData;

  //! house rules
  const {
    allowChildren,
    allowPet,
    checkinfrom,
    checkinuntil,
    checkoutfrom,
    checkoutuntill,
    petFee
  } = hotelData?.houseRules;
  //! parking details
  const { available, located, reserve, type } = hotelData?.parkingDetails;
  //!noOfHotels
  const { text } = hotelData?.noOfHotels;
  //! breakfastDetails
  const { priceIncluded, pricePerPersonAndDay, serveToGuest, breakfastsTypes } =
    hotelData?.breakfastDetails;


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
  

  //!bathroom details : [bathroomItems] are array
  const { privateBathroom, bathroomItems } = rooms[0].roomData?.bathroomDetails;


  //!room features : [foodAndDrink, outdoorsAndViews]
  const { foodAndDrink, mainView, outdoorsAndViews } =
    rooms[0].roomData?.roomFeatures;


  //!room name, room price
  const { roomName, roomPrice } = rooms[0].roomData;
 

  //!image URL
  console.log("All Image: ", rooms[0].roomData.addPhotos.allImage);
  console.log("Main Image Name:", rooms[0].roomData.addPhotos.imageName);

  // console.log("first", hotelData);
  // console.log("sec", rooms);

  const service_type = localStorage.getItem("serviceType");

 console.log()
    
      
       
  const info = {    
    service_type,
    stay_type: title,
    stay_type_description: description,
    how_many_hotel_text: text,
    country,
    street_name: streetAddress,
    sub_district: subDistrict,
    district,
    zip_code: zipCode,
    division,
    primary_place_name: primaryPlaceName,
    place_name: placeName,
    near_spot_names: spotNames.map((item) => ({
      near_spot_name: item?.spot_name,
      about: item?.about,
      activity: item?.activity,
      district: item?.district,
      division: item?.division,
      image: item?.image,
      known_as: item?.known_as,
      primary_place_name: item?.primary_place_name,
      remarkable_address: item?.remarkable_address,
      sub_district: item?.sub_district,
    })),
    spot_to_hotel_distance: distanceToSpot,
    hotel_name: hotelName,
    hotel_star: hotelRating,
    property_company_chain: propertyManagementEntity,
    property_company_name: managementEntityName,
    hotel_pacilities: popularFacilities.map((item) => ({
      pacilitie_name: item
    })), 
    serve_breakfast: serveToGuest,
    breakfast_include_main_price: priceIncluded,
    price_person_day: pricePerPersonAndDay,
    breakfast_type : breakfastsTypes.map((item) => ({
      food_type: item?.text
    })),
    parking_available:available,
    reserve_parking_spot: reserve,
    parking_location: located,
    parking_type: type,
    hotel_staff_speak: registerLanguages.map((item) => ({
      staff_speak: item
    })),
    check_in_time_from: checkinfrom,
    check_in_time_to: checkinuntil,
    check_out_time_from: checkoutfrom,
    check_out_time_to: checkoutuntill,
    allow_children: allowChildren,
    allow_pets: allowPet,
    allow_petPrice: petFee,
    room_type: "",
    total_room: "",
    bed_name: "",
    bed_number: "",
    total_person_stay: "",
    room_size: "",
    allow_smoking: "",
    bathroom_private: "",
    bathroom_service: [],
    room_general_amenities: [],
    outdoor_view: [],
    outdoor_view_main: "",
    room_food_drinks: [],   
    room_name: "",
    room_price: "",
    room_main_image: "",
    room_another_image: [],
    charge_credit_card: "",
    invoice_name: "",
    invoice_legal_company_name: "",
    legal_company_recipient_same_address: "",
    owner_email: ""
  }
  console.log("All Page Data",info?.allow_petPrice)
// console.log( type)
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
