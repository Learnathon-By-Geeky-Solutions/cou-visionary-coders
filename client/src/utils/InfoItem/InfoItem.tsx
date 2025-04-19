// Reusable component for biodata information items
export const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <p className="text-white py-1 font-bold rounded-md">
    {label} : {value}
  </p>
);
