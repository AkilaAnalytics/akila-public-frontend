import { useState, useRef } from 'react';
import RequiredFieldsList from './RequiredFields';
import QuickSteps from './QuickSteps';
import LogoUpload from './LogoUpload';
import FileUpload from './FileUpload';

export default function Process() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    'idle' | 'uploading' | 'processing' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState<string>('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    const allowedTypes = [
      'text/csv',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
      'application/vnd.ms-excel', // xls
    ];

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setStatus('idle');
      setMessage('');
    } else if (selectedFile) {
      setMessage('Please select a CSV or Excel file');
      setStatus('error');
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

    setStatus('uploading');
    setMessage('Uploading file...');

    const formData = new FormData();
    formData.append('file', file);
    if (logoFile) {
      formData.append('logo', logoFile);
    }

    try {
      const response = await fetch('/api/process-invoices', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus('processing');
      setMessage('Processing invoices...');

      // Check if response is a zip file
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/zip')) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoices_${new Date().toISOString().split('T')[0]}.zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setStatus('success');
        setMessage('Invoices generated successfully! Download started.');
      } else {
        const result = await response.json();
        if (result.error) {
          throw new Error(result.error);
        }
        setStatus('success');
        setMessage(result.message || 'Processing completed successfully!');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleLogoChange = (selectedFile: File | null) => {
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (['png', 'jpg', 'jpeg'].includes(fileExtension || '')) {
        setLogoFile(selectedFile);
        setMessage('');
      } else {
        setMessage('Please select a PNG, JPG, or JPEG file for the logo');
        setStatus('error');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-center text-3xl font-bold text-gray-900">
              Invoice Automation
            </h1>
            <p className="mt-2 text-center text-lg text-gray-600">
              Upload Excel file to generate professional invoice PDFs
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center md:flex-row">
        {/* Instructions */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm md:w-[40vw]">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            How it works
          </h2>
          <div className="flex flex-col gap-8 overflow-y-scroll md:h-[80vh]">
            <QuickSteps />
            <RequiredFieldsList />
          </div>
        </div>
        <div className="mt-5 flex h-[80vh] flex-col justify-center gap-5 px-5">
          <FileUpload />
          <LogoUpload
            logoFile={logoFile}
            setLogoFile={setLogoFile}
            handleLogoChange={handleLogoChange}
          />
        </div>
      </div>
    </div>
  );
}
