type SubmitStatusProps = {
  message: string;
};

export function SubmitStatus({ message }: SubmitStatusProps) {
  if (!message) return null;

  return (
    <p
      className="mt-4 rounded-md bg-green-50 px-4 py-3 text-left text-sm font-semibold text-green-700"
      role="status"
    >
      {message}
    </p>
  );
}
