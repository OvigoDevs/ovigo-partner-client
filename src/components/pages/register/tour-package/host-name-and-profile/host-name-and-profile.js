import Backlink from "@/components/core/backlink/backlink";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const { useRouter } = require("next/navigation");

const HostNameAndProfile = () => {
  const router = useRouter();

  const [newHost, setNewHost] = useState(false);

  const hostData = [
    {
      id: 1,
      name: "Abul",
    },
    {
      id: 2,
      name: "Kabul",
    },
    {
      id: 3,
      name: "Bulbul",
    },
  ];

  const languages = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "Bangla",
    },
    {
      id: 3,
      name: "Hindi",
    },
    {
      id: 4,
      name: "Urdu",
    },
  ];

  const [formData, setFormData] = useState({
    hostProfile: "",
    newHostName: "",
    hostNID: "",
    language: "",
  });

  // errors
  const [errors, setErrors] = useState(formData ? formData : {});

  // onChange for Select
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    const newErrors = validator(formData);

    if (Object.keys(newErrors).length === 0) {
      router.push("/register/tour-package/tour-package-name");
    } else {
      setErrors(newErrors);
    }
  };
  const validator = (data) => {
    let obj = {};
    if (newHost) {
      if (!data.newHostName.trim()) {
        obj.newHostName = "Name is required!";
      }
      if (!data.hostNID.trim()) {
        obj.hostNID = "NID is required!";
      }
      if (!data.language.trim()) {
        obj.language = "Please Select Language!";
      }
    } else {
      if (!data.hostProfile.trim()) {
        obj.hostProfile = "Please Select Host Profile!";
      }
    }

    return obj;
  };

  return (
    <div className="py-5">
      <Backlink
        link="/register/tour-package/business-license"
        text="Business License"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border p-5 rounded-md">
          <div className=" space-y-3">
            <p className="text-xl font-bold">Host Name and Profile</p>
            {!newHost ? (
              <>
                <div className="grid grid-cols-1 gap-2">
                  <label>What name should be on the invoice?</label>
                  <Select
                    onValueChange={(value) =>
                      handleOnChange({
                        target: {
                          name: "hostProfile",
                          value,
                        },
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Hosts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="grid grid-cols-1 overflow-y-auto h-[200px] gap-2">
                        {hostData.map((host) => (
                          <SelectItem key={host.id} value={host.name}>
                            {host.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <InputError error={errors?.hostProfile} />
                </div>
                <div className="text-end">
                  <Button onClick={() => setNewHost(!newHost)}>
                    Add New Host?
                  </Button>
                </div>
              </>
            ) : (
              <>
                <hr className="my-5" />
                <p className="font-bold">Add New Host Info</p>
                <div className="grid grid-cols-1 gap-2">
                  <label>Host Name</label>
                  <input
                    name="newHostName"
                    type="text"
                    placeholder="e.g. John Doe"
                    onChange={handleInputChange}
                  />
                  <InputError error={errors.newHostName} />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <label>Host NID</label>
                  <input
                    name="hostNID"
                    type="text"
                    placeholder="e.g. 1122441212188"
                    onChange={handleInputChange}
                  />
                  <InputError error={errors.hostNID} />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <label>Language Proficiency</label>
                  <Select
                    onValueChange={(value) =>
                      handleOnChange({
                        target: {
                          name: "language",
                          value,
                        },
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Add Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="grid grid-cols-1 overflow-y-auto h-[200px] gap-2">
                        {languages.map((lang) => (
                          <SelectItem key={lang.id} value={lang.name}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <InputError error={errors?.language} />
                </div>
              </>
            )}
          </div>
          <hr className="my-5" />
          <Button className="max-w-[150px]" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HostNameAndProfile;
