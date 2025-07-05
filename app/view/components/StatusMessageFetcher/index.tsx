export const successStatusMessage = (message: string) => {
  return (
    <div className="bg-emerald-500 text-white-100 rounded-md mt-5">
      <div className="p-3">{message}</div>
    </div>
  );
};

export const errorStatusMessage = (message: string) => {
  return (
    <div className="bg-red-500 text-red-100 rounded-md mt-5">
      <div className="p-3">{message}</div>
    </div>
  );
};

interface IProps {
  successMessage: string;
  errorMessage: string;
  fetcher: Promise<object>;
}

export default function StatusMessageFetcher({
  successMessage,
  errorMessage,
  fetcher,
}: IProps) {
  return (
    <div
      className={
        fetcher?.data?.ok
          ? "rounded-md mt-5 text-center bg-emerald-500 text-white-100"
          : "rounded-md mt-5 text-center bg-red-500 text-red-100"
      }
      role="button"
      tabIndex={0}
    >
      <div className="p-3">
        {fetcher?.data?.ok ? successMessage : errorMessage}
      </div>
    </div>
  );
}
