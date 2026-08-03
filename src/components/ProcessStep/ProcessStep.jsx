import { COLORS } from '../../constants';
import { getIcon } from '../../utils/icons';

export default function ProcessStep({ iconName, name, description, number }) {
  return (
    <div className="relative">
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl"
          style={{ backgroundColor: COLORS.primary }}
        >
          {getIcon(iconName)}
        </div>
      </div>
      <h4 className="font-bold mb-2 text-lg">{name}</h4>
      <p style={{ color: COLORS.darkLight }}>{description}</p>
    </div>
  );
}
