import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the TypeScript interface for our form fields
interface IFormInput {
  companyName: string;
  productName: string;
  contactName: string;
  website: string;
  businessEmail: string;
  phoneNumber: string;
  partnerType: string;
  consent: boolean;
}

const PartnershipForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInput>({
    mode: "onBlur",
    defaultValues: {
      companyName: "",
      productName: "",
      contactName: "",
      website: "",
      businessEmail: "",
      phoneNumber: "",
      partnerType: "",
      consent: false,
    },
  });

  // 3. State to handle success/error messages
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // 4. Submission handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      // Ensure this endpoint matches where you saved your route.ts
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // We can pass 'data' directly because our route.ts expects exactly these fields
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your partnership request has been submitted successfully.",
        });
        reset(); // Clear the form
      } else {
        const errorData = await response.json();
        setSubmitStatus({
          type: "error",
          message:
            errorData.error || "Failed to submit request. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
      console.error("Form submission error:", error);
    }
  };
  return (
    <div className="h-auto py-10 flex items-center justify-center p-8 text-white partnershipForm">
      {/* Note: To get the exact constellation/network background, add your image url to the wrapper above:
        style={{ backgroundImage: "url('/path-to-your-network-bg.png')", backgroundSize: 'cover' }} 
      */}

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-6 pr-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-head font-semibold leading-tight">
            Let’s Build a<br />
            Strong
            <br />
            Partnership
          </h1>
          <p className="text-gray-300 font-body text-md font-light leading-relaxed">
            Join the <span className="text-white font-bold">Fuworx</span>{" "}
            partner ecosystem and expand your product reach through trusted
            implementation and resale .
          </p>
          <p className="text-gray-400 font-body text-md">
            Grow Through Strategic Partnerships
          </p>
        </div>

        {/* Right Side: Form Content */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Row 1 */}
            <input
              {...register("companyName")}
              placeholder="Company Name"
              className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              {...register("productName")}
              placeholder="Product / Platform Name"
              className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />

            {/* Row 2 */}
            <input
              {...register("contactName")}
              placeholder="Partner Contact Name"
              className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              {...register("website")}
              placeholder="Website"
              className="w-full bg-transparent border border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />

            {/* Row 3 */}
            <input
              type="email"
                {...register("businessEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}

              placeholder="Business Email"
              className={`w-full bg-transparent  ${
                  errors.businessEmail
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                } border border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors`}
            />
            <input
              type="tel"
                {...register("phoneNumber", {
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number",
                  },
                })}
              placeholder="Phone Number"
              className={`w-full bg-transparent border  ${
                  errors.phoneNumber
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                } border-gray-500 rounded-md p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors`}
            />

            {/* Row 4 - Dropdown (Spans 1 column based on the image) */}
            <div className="col-span-1">
              <select
                {...register("partnerType")}
              className={`w-full px-4 py-2 rounded-lg bg-white border transition outline-none text-slate-900 ${
                errors.partnerType
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Partner Type
                </option>
                <option value="reseller" className="text-black">
                  Reseller
                </option>
                <option value="technology" className="text-black">
                  Technology Partner
                </option>
                <option value="implementation" className="text-black">
                  Implementation Partner
                </option>
              </select>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="mt-6 flex items-start space-x-3">
            <div className="shrink-0 mt-0.5">
              {/* Using a standard checkbox, but wrapping it to allow custom styling if needed later */}
              <input
                type="checkbox"
                id="consent"
                {...register("consent", { required: true })}
                className="w-4 h-4 rounded-full border-gray-500 bg-transparent text-[#7ac74f] focus:ring-[#7ac74f] cursor-pointer"
              />
            </div>
            <label
              htmlFor="consent"
              className="text-xs text-gray-300 leading-tight cursor-pointer"
            >
              By checking this box, I provide my consent to FUWORX to process my
              submitted data and receive appropriate business communications. I
              am aware that FUWORX uses my data for the purposes mentioned in
              their privacy policy .
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-centert sm:justify-start sm:ml-auto sm:mr-auto sm:w-3/4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-[250px] mx-auto bg-[#7ac74f] transition  ease-in duration-200 hover:scale-110 hover:bg-[#68a841] text-white font-bold py-3 px-6 rounded-md ml-auto md:mr-16"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PartnershipForm;
