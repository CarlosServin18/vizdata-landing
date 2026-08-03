export default function ProcessStep({ icon, name, description }) {
  return (
    <div>
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="font-bold mb-2">{name}</h4>
      <p>{description}</p>
    </div>
  );
}
