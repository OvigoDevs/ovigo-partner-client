import IconWrapper from "@/components/core/icon-wrapper/icon-wrapper";
import Files from "@/components/icons/files";
import Hotel from "@/components/icons/hotel";
import Register from "@/components/icons/register";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const STEPS = [
  {
    id: 0,
    icon: <Register />,
    title: "",
    description: "Company Registration is completed",
    btnText: "",
    isCompleted: false,
  },
  {
    id: 1,
    icon: <Hotel />,
    title: "Step 2: Tour Packages",
    description: "Tell us about your tour packages",
    btnText: "Add package",
    isCompleted: false,
  },

  {
    id: 2,
    icon: <Files />,
    title: "Step 3: Final",
    description: "Complete registration",
    btnText: "Complete",
    isCompleted: false,
  },
];

const RegistrationProgress = () => {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 py-20 max-w-[550px] mx-auto">
        {STEPS.map((step) => {
          return (
            <div
              key={step.id}
              className={`p-3 rounded-md border flex items-center justify-between gap-5 ${
                step.id === 0 ? "bg-primary text-white" : ""
              }`}
            >
              <div className="flex items-center justify-start gap-3">
                <div>{step.icon}</div>
                <div>
                  {step.title ? <h4>{step.title}</h4> : null}
                  <p>{step.description}</p>
                </div>
              </div>
              <Button
                className={`flex items-center justify-center`}
                onClick={() => {
                  if (step.id === 1) {
                    router.push("/register/tour-package/tour-package-name");
                  }
                  if (step.id === 2) {
                    router.push("/register/tour-package/add-description");
                  }
                }}
              >
                {step.id !== 2 ? (
                  <IconWrapper>
                    <PlusSquare className={`mr-2 text-white`} />
                  </IconWrapper>
                ) : null}
                <span>{step.btnText}</span>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegistrationProgress;
