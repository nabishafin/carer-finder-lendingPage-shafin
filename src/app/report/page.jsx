"use client";

import { useState } from "react";

const ReportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    duringService: "",
    incidentDate: "",
    incidentTime: "",
    incidentDetails: "",
    injuryDetails: "",
    actionsTaken: "",
    witnesses: "",
    desiredAction: "",
  });

  const [charCounts, setCharCounts] = useState({
    incidentDetails: 0,
    injuryDetails: 0,
    actionsTaken: 0,
    witnesses: 0,
    desiredAction: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (
      [
        "incidentDetails",
        "injuryDetails",
        "actionsTaken",
        "witnesses",
        "desiredAction",
      ].includes(name)
    ) {
      setCharCounts((prev) => ({
        ...prev,
        [name]: value.length,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="px-4 md:px-40 py-6 bg-white">
        <h1 className="text-2xl md:text-4xl text-[#0C4479] font-semibold">
          Incidents
        </h1>
        <p className="text-gray-700 mt-3 text-sm md:text-base">
          Incidents may occur from time to time during the delivery of support
          on Corefinder AU, and the reporting of incidents to Corefinder AU
          plays an important role in keeping everyone involved safe.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0C4479]">
              Report an Incident
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              All fields are mandatory
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                I am a...<span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select your role</option>
                <option value="support-worker">Support Worker</option>
                <option value="participant">Participant</option>
                <option value="family-member">Family Member</option>
                <option value="coordinator">Coordinator</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* During Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Did the incident take place during an arranged service?
                <span className="text-red-500">*</span>
              </label>
              <select
                name="duringService"
                value={formData.duringService}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Incident Date<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="incidentDate"
                  value={formData.incidentDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Incident Time<span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="incidentTime"
                  value={formData.incidentTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Textareas */}
            {[
              { label: "Incident details", name: "incidentDetails" },
              { label: "Details of any injuries", name: "injuryDetails" },
              { label: "Actions taken", name: "actionsTaken" },
              { label: "Witnesses", name: "witnesses" },
              { label: "Desired action", name: "desiredAction" },
            ].map(({ label, name }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={200}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {charCounts[name]}/200 characters
                </div>
              </div>
            ))}

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#0C4479] hover:bg-[#0b3c6c] text-white font-semibold py-2 px-8 rounded-md transition duration-200"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
