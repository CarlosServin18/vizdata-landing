import { COLORS } from '../../constants';

export default function ProcessStep({ icon, name, description, number }) {
  return (
    <div className="relative">
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
          style={{ backgroundColor: COLORS.primary }}
        >
          <span className="mr-2">{icon}</span>
        </div>
      </div>
      <h4 className="font-bold mb-2 text-lg">{name}</h4>
      <p style={{ color: COLORS.darkLight }}>{description}</p>
    </div>
  );
}
