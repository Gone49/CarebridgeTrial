"use client";
import React, { useState } from "react";

const dummyPatients = [
  {
    upin: "UPIN12345",
    name: "John Doe",
    treatmentType: "Cardiology",
    admissionTime: "2024-12-18 10:30 AM",
    location: "ICU",
  },
  {
    upin: "UPIN67890",
    name: "Jane Smith",
    treatmentType: "Neurology",
    admissionTime: "2024-12-19 08:15 AM",
    location: "ICU",
  },
  {
    upin: "UPIN54321",
    name: "David Brown",
    treatmentType: "Orthopedics",
    admissionTime: "2024-12-20 01:45 PM",
    location: "ICU",
  },
];

export default function ICUPatients() {
  const [patients, setPatients] = useState(dummyPatients);
  const [filterType, setFilterType] = useState("");

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleClearFilters = () => {
    setFilterType("");
  };

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.location === "ICU" && (!filterType || patient.treatmentType === filterType)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">ICU - Current Patients</h1>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <select
          value={filterType}
          onChange={handleFilter}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Treatment Types</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
        <button
          onClick={handleClearFilters}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
        >
          Clear Filters
        </button>
      </div>
      {filteredPatients.length > 0 ? (
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">UPIN</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Treatment Type</th>
              <th className="py-2 px-4 text-left">Admission Time</th>
              <th className="py-2 px-4 text-left">Profile</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.upin}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{patient.upin}</td>
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.treatmentType}</td>
                <td className="py-2 px-4">{patient.admissionTime}</td>
                <td className="py-2 px-4">
                  <a
                    href={`/patients/${patient.upin}`}
                    className="text-blue-500 hover:underline font-medium"
                  >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No ICU patients match your criteria.</p>
      )}
    </div>
  );
}