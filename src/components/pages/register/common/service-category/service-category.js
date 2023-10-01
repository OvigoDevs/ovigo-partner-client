import Image from "next/image";
import Link from "next/link";

const ServiceCategory = () => {
  const serviceCategories = [
    {
      id: 0,
      icon: "/images/icon/hotel.svg",
      title: "Hotel",
      category: "stay",
      link: "/register/hotel/hotel-categories",
    },
    {
      id: 1,
      icon: "/images/icon/bus.svg",
      title: "Bus",
      link: "/register/hotel/hotel-categories",
    },
    {
      id: 2,
      icon: "/images/icon/travel-and-tourism.svg",
      title: "Tour Package",
      category: "tour",
      link: "/",
    },
  ];

  // const { hotelData } = useSelector((state) => state.registerData);

  // const dispatch = useDispatch();

  const handleOnNext = (category) => {
    localStorage.setItem("serviceType", category);
    // setCookie("hotelData", { ...hotelData, serviceType: category }, "1h");
  };
  return (
    <div className="lg:py-20 py-5">
      {/* <Backlink link="/register/create-password" text="Create Password" /> */}
      <h2 className="title mb-3">
        <span className="text-[#26DE81]">Service</span> Category
      </h2>
      <p className="sub_title text-black">
        List your service on Ovigo and start welcoming your customer
      </p>
      <div className="grid md:grid-cols-3 lg:gap-8 gap-5 mt-10 w-full">
        {serviceCategories.map((service) => {
          const { id, icon, title, link, category } = service;
          return (
            <div
              key={id}
              className="text-center border pt-6 rounded-[15px] shadow-sm"
            >
              <Image
                width={50}
                height={50}
                src={icon}
                alt="Service Icon"
                className="mx-auto w-14 h-14 bg-white"
              />
              <h3 className="sub_title mt-4">{title}</h3>
              <Link href={link}>
                <button
                  className="card_btn lg:mt-10 mt-5 w-full"
                  onClick={() => handleOnNext(category)}
                >
                  List Service
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategory;
