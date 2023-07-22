import CustomRadio from "@/components/core/custom-radio/custom-radio";
import InputError from "@/components/core/input-error/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setCookie } from "@/lib/cookie";
import { invoiceInfo } from "@/redux/features/register_slice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InvoiceInfo = () => {
  // router
  const router = useRouter();
  // roomdata
  const { roomData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // formdata
  const [formData, setFormData] = useState(
    roomData.invoiceInfo
      ? roomData.invoiceInfo
      : {
          invoiceName: "",
          legalCompanyName: "",
          sameAddress: "",
        }
  );
  // edited
  const [edited, setEdited] = useState(false);
  // errors
  const [errors, setErrors] = useState(edited ? formData : {});
  // handleOnChange
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!edited) {
      setEdited(true);
    }
  };
  // handleSubmit
  const handleOnSubmit = () => {
    console.log(formData);
    setErrors(validator(formData));
  };
  // validation
  const validator = (data) => {
    let obj = {};

    if (!data.invoiceName.trim()) {
      obj.invoiceName = "Name on invoice is required!";
    }
    if (formData.invoiceName.trim()) {
      if (formData.invoiceName === "Legal Company Name (Please specify)") {
        if (!data.legalCompanyName.trim()) {
          obj.legalCompanyName = "Legal company name is required!";
        }
      }
    }

    if (!data.sameAddress.trim()) {
      obj.sameAddress = "Same address is required!";
    }
    return obj;
  };
  // useEffect > dispatch > setCookies > router
  useEffect(() => {
    if (Object.keys(errors).length === 0 && edited) {
      // dispatch
      dispatch(
        invoiceInfo({
          invoiceInfo: formData,
        })
      );
      // setCookies
      setCookie("roomData", { ...roomData, invoiceInfo: formData });
      // router
      router.push("/register/important-info");
    }
  }, [errors]);
  // useEffect > setEdited
  useEffect(() => {
    setEdited(true);
  }, []);

  return (
    <div className="py-5">
      <h4 className="font-bold">Invoicing</h4>

      {/* Container */}
      <div className="pt-5 grid grid-cols-2 gap-4">
        <div className="p-5 rounded-md border">
          <p>
            We&apos;ll send you payouts every month by bank transfer. This
            payout includes all reservations that checked out in the previous
            month.
          </p>

          <div className="pt-5">
            <CustomRadio
              options={[
                "OVIGO OWNER",
                "OVIGO HOTEL",
                "Legal Company Name (Please specify)",
              ]}
              label="What name should be on the invoice?"
              handleOnChange={handleOnChange}
              name="invoiceName"
              defaultValue={formData.invoiceName}
            />
            <InputError error={errors.invoiceName} />

            {formData.invoiceName === "Legal Company Name (Please specify)" ? (
              <>
                <h4 className="font-bold mt-5">
                  Legal Company Name (Please specify)
                </h4>
                <input
                  className="w-full mt-2"
                  name="legalCompanyName"
                  type="text"
                  placeholder="Legal Company Name"
                  defaultValue={formData.legalCompanyName}
                  onChange={handleOnChange}
                />
                <InputError error={errors.legalCompanyName} />
              </>
            ) : null}

            <hr className="my-5" />
            <CustomRadio
              options={["Yes", "No"]}
              label="Does this recipient have the same address as your property?"
              handleOnChange={handleOnChange}
              name="sameAddress"
              defaultValue={formData.sameAddress}
            />
            <InputError error={errors.sameAddress} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <Button className="w-full" onClick={handleOnSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default InvoiceInfo;
