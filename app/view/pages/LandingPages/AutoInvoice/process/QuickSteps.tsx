export default function QuickSteps() {
  return (
    <div>
      <h3 className="sticky top-0 bg-gray-50 py-2 text-lg font-medium text-gray-900 mb-4 z-10">
        Quick Steps
      </h3>
      <ol className="space-y-3 text-gray-600">
        <li className="flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
            1
          </span>
          Prepare your CSV file with invoice data including columns for vendor
          information1, customer information, and product information: Total
          Wholesale $
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
            2
          </span>
          Upload the CSV file using the upload area above
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
            3
          </span>
          Click "Generate Invoices" to process the file
        </li>
        <li className="flex items-start">
          <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white text-sm rounded-full flex items-center justify-center mr-3 mt-0.5">
            4
          </span>
          Download the generated ZIP file containing all invoice PDFs
        </li>
      </ol>
    </div>
  );
}
