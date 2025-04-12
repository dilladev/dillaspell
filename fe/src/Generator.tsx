import React, { useState } from "react";
import { jsPDF } from "jspdf";

// Main App component
const App: React.FC = () => {
  const [input, setInput] = useState<string>(""); // State to hold user input from the textarea

  // Function to generate and export the spelling practice sheet as a PDF
  const exportToPDF = () => {
    // Split input by newline or comma
    const lines = input.split(/\n|,/);

    // Clean the input lines: remove numbering, split into words, and filter valid ones
    const cleanWords = lines
      .map((line) =>
        line
          .trim()
          .replace(/^\d+[\.\)]\s*/, "") // Remove numbering like "1. " or "2) "
          .split(/\s+/) // Split on any space
      )
      .flat()
      .filter((w) => /^[a-zA-Z]+$/.test(w)); // Only keep valid alphabetic words

    // Initialize jsPDF document
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 20; // Starting y position

    // Add title to the PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Spelling Word Practice Sheet", 105, y, { align: "center" });
    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setLineWidth(0.5);

    // Add each word and handwriting lines below it
    cleanWords.forEach((word) => {
      // Add a new page if near the bottom of the current page
      if (y > pageHeight - 30) {
        doc.addPage();
        y = 20;
      }

      // Write the word
      doc.setFontSize(14);
      doc.text(`${word}`, 20, y);
      y += 8;

      const left = 20;
      const right = 190;

      // Draw top solid line
      doc.line(left, y, right, y);

      // Draw middle dotted line
      doc.setLineWidth(0.3);
      doc.setLineDashPattern([1, 1], 0);
      doc.line(left, y + 6, right, y + 6);

      // Draw bottom solid line
      doc.setLineDashPattern([], 0);
      doc.setLineWidth(0.5);
      doc.line(left, y + 12, right, y + 12);

      y += 24; // Space before next word
    });

    // Save the PDF file
    doc.save("spelling-practice.pdf");
  };

  return (
    <div className="min-h-screen text-white p-6 print:p-0">
      <div className="max-w-3xl mx-auto gradient p-6 rounded">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          📝 DillaSpell - Spelling Word Practice
        </h1>

        {/* Textarea for entering spelling words */}
        <textarea
          rows={8}
          placeholder="Enter your spelling words here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent border border-white p-4 mb-4 rounded-md resize-none text-white placeholder:text-gray-400"
        />

        {/* Export to PDF button */}
        <div className="flex flex-wrap gap-4 mb-8">         
          <button
            onClick={exportToPDF}
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
          >
            Export to PDF
          </button>                 
        </div>
      </div>
    </div>
  );
};

export default App;
