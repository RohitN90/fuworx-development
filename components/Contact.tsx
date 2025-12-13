"use client";
import { useState } from "react";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiry: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
                placeholder="John Doe"
              />
            </div>

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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
                placeholder="john@example.com"
              />
            </div>

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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
                placeholder="+1 (555) 000-0000"
              />
            </div>

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
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="enquiry"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Enquiry Type *
            </label>
            <select
              id="enquiry"
              name="enquiry"
              required
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none text-slate-900"
            >
              <option value="">Select an option</option>
              <option value="general">General Inquiry</option>
              <option value="product">Product Inquiry</option>
              <option value="support">Support Request</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none text-slate-900"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-200"
            />
            <label
              htmlFor="consent"
              className="text-sm font-body text-slate-600"
            >
              By checking this box, I provide my consent to FUWORX to process my
              submitted data and receive appropriate business communications. I
              am aware that FUWORX uses my data for the purposes mentioned in
              their privacy policy .
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#0A1F44] text-white/09 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Message
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
