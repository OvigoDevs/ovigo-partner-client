import Image from "next/image";
import benefitIcon from "../../../../images/benefit-icon.svg";

const BenefitSection = () => {
  return (
    <div className="py-10 px-20">
      <h2 className="text-3xl font-bold">Benefit of working with us</h2>
      {/* Benefit Container */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-14 py-10">
        {/* Card 1 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">List any type of property</h2>
          <p>
            Apartments to villas and everything in between can be listed for
            free.
          </p>
        </div>
        {/* Card 2 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">Easily import details</h2>
          <p>
            To save you time, many of the details from your existing listings
            can be imported.
          </p>
        </div>
        {/* Card 3 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">Step-by-step guidance</h2>
          <p>
            You&apos;ll learn how our platform works, best practices, and things
            to watch out for.
          </p>
        </div>
        {/* Card 4 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">Unique discounts</h2>
          <p>
            Discounts on products and services that save time and improve the
            guest experience.
          </p>
        </div>
        {/* Card 5 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">
            Enjoy more flexibility at no extra cost
          </h2>
          <p>
            With the Smart Flex Reservations program, your guests can enjoy the
            flexibility of free cancellation policies.
          </p>
        </div>
        {/* Card 6 */}
        <div className="space-y-3">
          <Image
            width={100}
            height={100}
            src={benefitIcon}
            alt="Benefit"
          ></Image>
          <h2 className="text-2xl font-bold">Review Score</h2>
          <p>
            Your review score on third-party travel websites may be converted
            and then reflected on your Booking.com listing page.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BenefitSection;
