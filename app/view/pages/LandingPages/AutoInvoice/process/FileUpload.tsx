import { useState, useRef } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "processing" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    const allowedTypes = [
      "text/csv",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xlsx
      "application/vnd.ms-excel", // xls
    ];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setStatus("idle");
      setMessage("");
    } else if (selectedFile) {
      setMessage("Please select a CSV or Excel file");
      setStatus("error");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleUpload = async () => {
    if (!file) return;

    setStatus("uploading");
    setMessage("Uploading file...");

    const formData = new FormData();
    formData.append("file", file);
    if (logoFile) {
      formData.append("logo", logoFile);
    }

    try {
      const response = await fetch("/api/process-invoices", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus("processing");
      setMessage("Processing invoices...");

      // Check if response is a zip file
      const contentType = response.headers.get("content-type");
      if (contentType?.includes("application/zip")) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `invoices_${new Date().toISOString().split("T")[0]}.zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setStatus("success");
        setMessage("Invoices generated successfully! Download started.");
      } else {
        const result = await response.json();
        if (result.error) {
          throw new Error(result.error);
        }
        setStatus("success");
        setMessage(result.message || "Processing completed successfully!");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <div className="w-auto bg-gray-50">
      {/* Main Content */}
      <div className="">
        <div className="space-y-8">
          {/* Upload Area */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 cursor-pointer ${
                dragOver
                  ? "border-blue-400 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv|.xlsx|.xls"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                className="hidden"
              />

              <div className="text-6xl mb-4">📄</div>

              {file ? (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-green-700">
                    File Selected
                  </h3>
                  <p className="text-gray-700 font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    Size: {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Drop your file here
                  </h3>
                  <p className="text-gray-500">or click to browse files</p>
                  <p className="text-sm text-gray-400">
                    Supports: .csv, .xlsx, .xls files only
                  </p>
                </div>
              )}
            </div>

            {file && (
              <div className="mt-8 text-center">
                <button
                  onClick={handleUpload}
                  disabled={status === "uploading" || status === "processing"}
                  className="inline-flex cursor-pointer items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === "uploading" && "Uploading..."}
                  {status === "processing" && "Processing..."}
                  {(status === "idle" ||
                    status === "success" ||
                    status === "error") &&
                    "Generate Invoices"}
                </button>
              </div>
            )}

            {(status === "uploading" || status === "processing") && (
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gray-800 transition-all duration-300 ease-out"
                    style={{
                      width: status === "uploading" ? "50%" : "90%",
                      animation: "pulse 2s ease-in-out infinite alternate",
                    }}
                  ></div>
                </div>
              </div>
            )}

            {message && (
              <div
                className={`mt-6 p-4 rounded-md ${
                  status === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : status === "error"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : "bg-blue-50 text-blue-800 border border-blue-200"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
