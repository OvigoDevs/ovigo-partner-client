//!service_type: {
    type: String,
    required: [true, "Type Name must be required"],
},
//!stay_type: {
    type: String,
    required: [true, "Stay Type Name must be required"],
},
//!stay_type_description: {
    type: String,
    required: [true, "Stay Type Description must be required"],
},
//!no_of_hotel: {
    type: String,
    required: [true, "Number Of Hotel must be required"],
},
country: {
    type: String,
    required: [true, "Country Name must be required"],
},
street_name: {
    type: String,
    required: [true, "Street Name must be required"],
},
sub_district: {
    type: String,
    required: [true, "Sub_District Name must be required"],
},
district: {
    type: String,
    required: [true, "District Name must be required"],
},
zip_code: {
    type: String,
    required: [true, "Zip Code must be required"],
},
division: {
    type: String,
    required: [true, "Division Name must be required"],
},
place_name: {
    type: String,
    required: [true, "Place must be required"],
},
// !near_spot_names: [
    {
        near_spot_name: String,
        about: String,
        activity: String,
        district: String,
        Division: String,
        image: String,
        known_as: String,
        primary_place_name: String,
        remarkable_address: String,
        sub_district: String
    }
],
// !hotel_address: {
    type: String,
    required: [true, "Hotel Address Name must be required"],
},
hotel_name: {
    type: String,
    required: [true, "hotel Name must be required"],
},
hotel_star: {
    type: String,
    required: [true, "Hotel Star must be required"],
},
property_company_chain: {
    type: String,
    required: [true, "Proparty Company must be required"],
},
property_company_name: {
    type: String,
},
hotel_pacilities: [
    {
        pacilitie_name: String
    }
],
serve_breakfast: {
    type: String,
    required: [true, "Breakfat Should Yes Or No"],
},
breakfast_include_main_price: {
    type: String
},
price_person_day: {
    type: Number
},
breakfast_type: [
    {
        food_type: String
    }
],
parking_available: {
    type: String,
    required: [true, "Parking Type Should Fill Up"],
},
reserve_parking_spot: {
    type: String
},
parking_location: {
    type: String
},
parking_type: {
    type: String
},
hotel_staff_speak: [
    {
        staff_speak: String
    }
],
check_in_time_from: {
    type: String,
    required: [true, "Hotel Check In From Time Need"],
},
check_in_time_to: {
    type: String,
    required: [true, "Hotel Check In To Time Need"],
},
check_out_time_from: {
    type: String,
    required: [true, "Hotel Check Out From Time Need"],
},
check_out_time_to: {
    type: String,
    required: [true, "Hotel Check Out To Time Need"],
},
allow_children: {
    type: String,
    required: [true, "Allow Children Should Yes or No"],
},
allow_pets: {
    type: String,
    required: [true, "Allow Pets Should Yes or No"],
},
allow_petPrice: {
    type: Number
},
room_type: {
    type: String,
    required: [true, "Room Type Required"],
},
total_room: {
    type: Number,
    required: [true, "Total Room Number Required"],
},
room_type_bed: [
    {
        bed_name: String,
        bed_number: Number
    }
],
total_person_stay: {
    type: Number,
    required: [true, "How many guest stay required"],
},
room_size: {
    type: String
},
allow_smoking: {
    type: String,
    required: [true, "You Allaw Smoking Required"],
},
bathroom_private: {
    type: String,
    required: [true, "Private Birthroom Details Required"],
},
bathroom_service: [
    {
        service_name: String
    }
],
room_general_amenities: [
    {
        service_name: String
    }
],
outdoor_view: [
    {
        outdoor_view: String
    }
],
outdoor_view_main: {
    type: String
},
room_food_drinks: [
    {
        service_name: String
    }
],
room_name: {
    type: String,
    required: [true, "Room Name Must Provide"],
},
room_price: {
    type: Number,
    required: [true, "Room Price Must Provide"],
},
room_main_image: {
    type: String,
    required: [true, "Main image need"],
},
room_another_image: [
    {
        another_image: String
    }
],
charge_credit_card: {
    type: String,
    required: [true, "Charge Credit Card Should Yes or No"]
},
invoice_name: {
    type: String,
    required: [true, "Invoice Name Should Required"],
},
invoice_legal_company_name: {
    type: String
},
legal_company_recipient_same_address: {
    type: String
},
role: {
    type: String,
    default: "business_user"
},
partner: {
    type: String,
    default: "NO"
},
special_partner: {
    type: String,
    default: "NO"
},
status: {
    type: String,
    default: "Not Approve"
    }