import { AuthContext } from "@/components/context/AuthProvider";
import Backlink from "@/components/core/backlink/backlink";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ConfirmHotel = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // router
  const router = useRouter();
  // hotelData
  const { hotelData, rooms, registerData, roomData } = useSelector(
    (state) => state.registerData
  );
  const { country, district, division, streetAddress, subDistrict, zipCode } =
    hotelData?.hotelAddress;
  const { title, description } = hotelData?.hotelCategories;
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
  const { popularFacilities } = hotelData;
  const { registerLanguages } = hotelData;
  const {
    allowChildren,
    allowPet,
    checkinfrom,
    checkinuntil,
    checkoutfrom,
    checkoutuntil,
    petFee,
  } = hotelData?.houseRules;
  console.log(hotelData?.houseRules)
  const { available, located, reserve, type } = hotelData?.parkingDetails;
  const { text } = hotelData?.noOfHotels;
  const { priceIncluded, pricePerPersonAndDay, serveToGuest, breakfastsTypes } =
    hotelData?.breakfastDetails;
  const {
    guestsNumber,
    roomSize,
    bed_number,
    bed_name,
    sameTypeRooms,
    smookingAllow, 
    unitType,
  } = rooms[0].roomData?.roomDetails;
  const { privateBathroom, bathroomItems } = rooms[0].roomData?.bathroomDetails;
  const { foodAndDrink, mainView, outdoorsAndViews , generalAmenities} =
    rooms[0].roomData?.roomFeatures;
  const { roomName, roomPrice } = rooms[0].roomData;
  const roomAnotherImage = rooms[0]?.roomData?.addPhotos?.allImage;
  console.log("jdf",roomAnotherImage)
  const room_main_image  = rooms[0]?.roomData?.addPhotos?.imageName;
  const service_type = localStorage.getItem("serviceType");
  const {guestPayment } = (roomData)
  const {invoiceName ,sameAddress, legalCompanyName} = (roomData.invoiceInfo)
  const { userEmail } = useContext(AuthContext); 
  // Submit All Data
  const handleOnSubmit = () => {
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
        pacilitie_name: item,
      })),
      serve_breakfast: serveToGuest,
      breakfast_include_main_price: priceIncluded,
      price_person_day: pricePerPersonAndDay,
      breakfast_type: breakfastsTypes.map((item) => ({
        food_type: item?.text,
      })),
      parking_available: available,
      reserve_parking_spot: reserve,
      parking_location: located,
      parking_type: type,
      hotel_staff_speak: registerLanguages.map((item) => ({
        staff_speak: item,
      })),
      check_in_time_from: checkinfrom,
      check_in_time_to: checkinuntil,
      check_out_time_from: checkoutfrom,
      check_out_time_to: checkoutuntil,
      allow_children: allowChildren,
      allow_pets: allowPet,
      allow_petPrice: petFee,
      unit_type: unitType,
      total_room: sameTypeRooms,
      bed_name,
      bed_number,
      total_person_stay: guestsNumber,
      room_size: roomSize,
      allow_smoking: smookingAllow,
      bathroom_private: privateBathroom,
      bathroom_service: bathroomItems.map((item) => ({
        service_name: item,
      })),
      room_general_amenities: generalAmenities?.map((item) => ({
        service_name: item,
      })),
      outdoor_view: outdoorsAndViews?.map((item) => ({
        outdoor_view: item,
      })),
      outdoor_view_main: mainView,
      room_food_drinks: foodAndDrink?.map((item) => ({
        service_name: item,
      })),
      room_name:roomName,
      room_price: roomPrice,
      room_main_image,
      room_another_image: roomAnotherImage.map((item) => ({
        another_image: item.image,
      })),
      charge_credit_card: guestPayment,
      invoice_name: invoiceName,
      invoice_legal_company_name: legalCompanyName,
      legal_company_recipient_same_address: sameAddress,
      owner_email: userEmail,
    };
    // console.log("All Page Data", info?.room_another_image);

    fetch(
      "http://159.223.78.171:5000/businessServicesAdd",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(info),
      }
    )
      .then((response) => response.json())
      .then((infoData) => {
        console.log(infoData);
        if (infoData?.status === "Successfully") {
          localStorage.removeItem("hotelData")
          localStorage.removeItem("rooms")
          localStorage.removeItem("registerData")
          localStorage.removeItem("roomData")
          localStorage.removeItem("serviceType")
          toast.success(infoData.status, {
            icon: "👏",
          });    
          // router
            router.push("/");      
        } else {
          toast.error(infoData?.error);
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
      
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
          <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="flex justify-start gap-2 items-center lg:mt-10 mb-5 mt-3">
                <input
                  required={true}
                  {...register("checkbox", {
                    required: "checkbox",
                  })}
                  type="checkbox"
                  className="checkbox-sm bg-transparent "
                />
                <p className="m-0 text-[#344054] lg:text-base">
                I certify that this is a legitimate accomodation business with all necessary licenses and permits, which can be shown upon request. Ovigo reserves the right to verify and investigate any details provided in this registration.
                </p>
              </div>
              <div className="flex justify-start gap-2 items-center lg:mt-10 mb-5 mt-3">
                <input
                  required={true}
                  {...register("checkbox", {
                    required: "checkbox",
                  })}
                  type="checkbox"
                  className="checkbox-sm bg-transparent "
                />
                <p className="m-0 text-[#344054] lg:text-base">
                I have read, accepted, and agreed to the General Delivery Terms.
                </p>
              </div>
              <div className="pt-5">
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </div>
          </form>
          
        </div>
      </div>
      
    </div>
  );
};

export default ConfirmHotel;
