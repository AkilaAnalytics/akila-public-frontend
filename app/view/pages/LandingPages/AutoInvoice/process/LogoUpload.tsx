interface Props {
  logoFile: File | null;
  setLogoFile: (file: File | null) => void;
  handleLogoChange: (file: File | null) => void;
}
export default function LogoUpload({
  logoFile,
  setLogoFile,
  handleLogoChange,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full w-auto p-8">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-all duration-200 cursor-pointer"
        onClick={() => document.getElementById("logo-input")?.click()}
      >
        <input
          id="logo-input"
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => handleLogoChange(e.target.files?.[0] || null)}
          className="hidden"
        />

        <div className="text-4xl mb-3">🖼️</div>

        {logoFile ? (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-green-700">
              Logo Selected
            </h3>
            <p className="text-gray-700 font-medium">{logoFile.name}</p>
            <p className="text-sm text-gray-500">
              Size: {(logoFile.size / 1024).toFixed(1)} KB
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Upload Company Logo (optional)
            </h3>
            <p className="text-gray-500">PNG, JPG, or JPEG files only</p>
          </div>
        )}
      </div>
    </div>
  );
}
