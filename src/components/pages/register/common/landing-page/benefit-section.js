import Image from "next/image";

const BenefitSection = () => {
  const benefits = [
    {
      id: 0,
      title: "List any type of property",
      description:
        "Apartments to villas and everything in between can be listed for free.",
    },
    {
      id: 1,
      title: "Easily import details",
      description:
        "To save you time, many of the details from your existing listings can be imported.",
    },
    {
      id: 2,
      title: "Step-by-step guidance",
      description:
        "You&apos;ll learn how our platform works, best practices, and things to watch out for.",
    },
    {
      id: 3,
      title: "Unique discounts",
      description:
        "Discounts on products and services that save time and improve the guest experience.",
    },
    {
      id: 4,
      title: "Enjoy more flexibility at no extra cost",
      description:
        "With the Smart Flex Reservations program, your guests can enjoy the flexibility of free cancellation policies.",
    },
    {
      id: 5,
      title: "Review Score",
      description:
        "Your review score on third-party travel websites may be converted and then reflected on your Booking.com listing page.",
    },
  ];
  return (
    <div className="section-p">
      <h2 className="text-4xl font-bold">Benefit of working with us</h2>
      {/* Benefit Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10">
        {benefits.map((item) => {
          const { id, title, description } = item;
          return (
            <div key={id} className="hover:shadow p-5 rounded-md border border-gray-50 dark:border-gray-800 dark:hover:border-gray-600">
              <Image
                width={100}
                height={100}
                src="/images/benefit-icon.svg"
                alt="Benefit"
              ></Image>
              <div className="pt-5 grid grid-cols-1 gap-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BenefitSection;
