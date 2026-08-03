import {
  FiSearch,
  FiDatabase,
  FiBarChart2,
  FiHeadphones,
  FiTrendingUp,
  FiGitBranch,
  FiAward,
} from 'react-icons/fi';

export const ICON_MAP = {
  FiSearch,
  FiDatabase,
  FiBarChart2,
  FiHeadphones,
  FiTrendingUp,
  FiGitBranch,
  FiAward,
};

export function getIcon(iconName, props = {}) {
  const IconComponent = ICON_MAP[iconName];
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }
  return <IconComponent {...props} />;
}
