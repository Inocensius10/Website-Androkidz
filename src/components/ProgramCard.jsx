function ProgramCard({ title, description }) {
  return (
    <div className="border rounded-lg p-6 text-center hover:shadow transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default ProgramCard;
