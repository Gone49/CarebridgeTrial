"use client"
import React, { useState, useEffect } from 'react';

// Define the type for the report structure, including UPID and remarks
interface Report {
  id: number;
  category: string;
  title: string;
  content: string;
  upid: string; // Unique Patient ID
  dateGenerated: string; // Date and Time when the report was generated (string)
  remarks: string; // Remarks by the person who generated the report
}

const reports: Report[] = [
  { 
    id: 1, 
    category: 'Lung', 
    title: 'Lung Report 1', 
    content: 'Details of Lung report 1',
    upid: 'P001', 
    dateGenerated: new Date('2024-12-23T10:30:00').toString(), // Date with exact time
    remarks: 'Report generated by Dr. Smith'
  },
  { 
    id: 2, 
    category: 'Lung', 
    title: 'Lung Report 2', 
    content: 'Details of Lung report 2',
    upid: 'P002', 
    dateGenerated: new Date('2024-12-21T14:20:00').toString(), // Date with exact time
    remarks: 'Report generated by Dr. Johnson'
  },
  { 
    id: 3, 
    category: 'Lung', 
    title: 'Lung Report 3', 
    content: 'Details of Lung report 3',
    upid: 'P003', 
    dateGenerated: new Date('2024-12-22T09:15:00').toString(), // Date with exact time
    remarks: 'Report generated by Dr. Davis'
  },
  { 
    id: 4, 
    category: 'Lung', 
    title: 'Lung Report 4', 
    content: 'Details of Lung report 4',
    upid: 'P001', 
    dateGenerated: new Date('2024-12-23T16:00:00').toString(), // Date with exact time
    remarks: 'Report generated by Dr. Smith'
  },
];

// Sort reports by the latest date and time first
const sortReportsByDate = (reports: Report[]) => {
  return reports.sort((a, b) => (new Date(b.dateGenerated).getTime() - new Date(a.dateGenerated).getTime()));
};

export default function LungReportsPage() {
  // State to hold filtered reports by category "Lung"
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    // Filter reports by category "Lung" and sort them by latest date and time
    const lungReports = reports.filter(report => report.category === 'Lung');
    const sortedReports = sortReportsByDate(lungReports);
    setFilteredReports(sortedReports);
  }, []);

  // Function to handle filtering by date, comparing date without time
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateValue = event.target.value;
    setSelectedDate(selectedDateValue);

    if (selectedDateValue) {
      // Filter reports by selected date (ignoring the time part)
      const filteredByDate = reports.filter((report) => {
        const reportDate = new Date(report.dateGenerated);
        const reportDateString = reportDate.toISOString().split('T')[0]; // Only compare the date part
        return reportDateString === selectedDateValue && report.category === 'Lung';
      });
      setFilteredReports(sortReportsByDate(filteredByDate)); // Sort by latest date and time
    } else {
      // If no date is selected, show all reports
      const lungReports = reports.filter(report => report.category === 'Lung');
      setFilteredReports(sortReportsByDate(lungReports)); // Sort by latest date and time
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Lung Reports</h1>

        {/* Date Picker to Filter Reports */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-gray-600 mb-2">Filter by Date</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={handleDateChange} 
            className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {filteredReports.length > 0 ? (
          <div className="space-y-6">
            {filteredReports.map(report => (
              <div key={report.id} className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">{report.title}</h2>
                <p className="text-gray-600">{report.content}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p><strong>Patient ID (UPID):</strong> {report.upid}</p>
                  <p><strong>Date and Time Generated:</strong> {new Date(report.dateGenerated).toLocaleString()}</p>
                  <p><strong>Remarks:</strong> {report.remarks}</p>
                </div>
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => alert(`Viewing report for UPID: ${report.upid}`)} 
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
                  >
                    View Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">No Lung reports available.</p>
        )}
      </div>
    </div>
  );
}
