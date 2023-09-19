import GuestContainer from "@/components/ui/guestContainer";
import Hero from "@/components/ui/hero";
import ListingContainer from "@/components/ui/listingContainer";
import ServiceContainer from "@/components/ui/serviceContainer";

const Home = () => {
  return (
    <>
      <Hero />
      <ListingContainer />
      <ServiceContainer />
      <GuestContainer />
    </>
  );
};

export default Home;
