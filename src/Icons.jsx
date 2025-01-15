// Icons.jsx
import { HomeIcon, XIcon } from '@heroicons/react/solid'; // Solid icons
import { SearchIcon } from '@heroicons/react/outline'; // Outline icons
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

// Mapping icon names to their respective components
const iconMap = {
  home: HomeIcon,
  xmark: XIcon,
  search: SearchIcon,
};

const Icon = ({ name, className }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null; // If icon name is not found, return nothing
  }

  return <IconComponent className={className} />;
};

// Define prop types
Icon.propTypes = {
  name: PropTypes.oneOf(['home', 'xmark', 'search']).isRequired, // Define valid names
  className: PropTypes.string, // className is optional
};

export default Icon;
