import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container-d section-d">
      <h1 className="pb-10 text-xl font-black">Home</h1>
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
    </div>
  );
};

export default Home;
