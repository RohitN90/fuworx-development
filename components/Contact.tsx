"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  enquiry: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      enquiry: "",
      message: "",
      consent: false,
    },
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: `
Company: ${data.company}
Enquiry Type: ${data.enquiry}

Message:
${data.message}
          `,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you shortly.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl my-14 rounded-3xl w-full max-w-6xl p-8 md:p-12">
        <div className="mb-5 text-center">
          <h1 className="text-4xl font-bold font-head text-slate-900 mb-2">
            Get in Touch
          </h1>
          <p className="text-slate-600 font-bold">
            We&apos;d love to hear from you. Fill out the form below and
            we&apos; ll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`w-full p-3 rounded-lg text-sm font-medium text-white ${
                submitStatus.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 000-0000"
                {...register("phone", {
                  pattern: {
                    value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number",
                  },
                })}
                className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Acme Corp"
                {...register("company")}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
              />
            </div>
          </div>

          {/* Enquiry Type */}
          <div>
            <label
              htmlFor="enquiry"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Enquiry Type *
            </label>
            <select
              id="enquiry"
              {...register("enquiry", {
                required: "Please select an enquiry type",
              })}
              className={`w-full px-4 py-2 rounded-lg border transition outline-none text-slate-900 ${
                errors.enquiry
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="product">Product Inquiry</option>
              <option value="support">Support Request</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>
            {errors.enquiry && (
              <p className="text-red-500 text-sm mt-1">{errors.enquiry.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={2}
              placeholder="Tell us more about your inquiry..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className={`w-full px-4 py-2 rounded-lg border transition outline-none resize-none text-slate-900 ${
                errors.message
                  ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              {...register("consent", {
                required: "You must accept to continue",
              })}
              className={`mt-1 w-4 h-4 rounded cursor-pointer ${
                errors.consent
                  ? "border-red-500 text-red-600"
                  : "text-blue-600 border-slate-300"
              }`}
            />
            <div className="flex-1">
              <label
                htmlFor="consent"
                className="text-sm font-body text-slate-600 cursor-pointer"
              >
                By checking this box, I provide my consent to FUWORX to process my
                submitted data and receive appropriate business communications. I
                am aware that FUWORX uses my data for the purposes mentioned in
                their privacy policy.
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.consent.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:max-w-[300px] md:mx-auto md:justify-center md:items-center md:flex bg-[#0A1F44] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>We typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
