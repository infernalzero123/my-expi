import "react";
import PropTypes from "prop-types";

// Individual Icon Component
const Icon = ({ src, alt, width = 50, height = 50 }) => (
  <a target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} width={width} height={height} />
  </a>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

// Export Each Icon Separately
export const MilestoneIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/401870/graduation-cap.svg"
    alt="Milestone Icon"
    {...props}
  />
);

export const ViteIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/374167/vite.svg"
    alt="Vite Logo"
    {...props}
  />
);

export const ReactIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/354259/react.svg"
    alt="React Logo"
    {...props}
  />
);

export const PythonIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/452091/python.svg"
    alt="Python Logo"
    {...props}
  />
);

export const PhpIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/303208/php-1-logo.svg"
    alt="PHP Logo"
    {...props}
  />
);

export const JavaIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/452234/java.svg"
    alt="Java Logo"
    {...props}
  />
);

export const JavascriptIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/353925/javascript.svg"
    alt="JavaScript Logo"
    {...props}
  />
);

export const TypescriptIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
    alt="TypeScript Logo"
    {...props}
  />
);

export const CPPIcon = (props) => (
  <Icon
    src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png"
    alt="C++ Logo"
    {...props}
  />
);

export const TailwindCSSIcon = (props) => (
  <Icon
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png"
    alt="Tailwind CSS Logo"
    {...props}
  />
);

export const BootstrapIcon = (props) => (
  <Icon
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png"
    alt="Bootstrap Logo"
    {...props}
  />
);

export const GithubIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/512317/github-142.svg"
    alt="GitHub Logo"
    {...props}
  />
);

export const VSCodeIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/374171/vscode.svg"
    alt="VS Code Logo"
    {...props}
  />
);

export const MysqlIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
    alt="MySQL Logo"
    {...props}
  />
);

export const PSIcon = (props) => (
  <Icon
    src="https://www.svgrepo.com/show/303170/adobe-photoshop-cs6-logo.svg"
    alt="Photoshop Logo"
    {...props}
  />
);



/*
https://www.svgrepo.com/show/452091/python.svg
https://www.svgrepo.com/show/303208/php-1-logo.svg
https://www.svgrepo.com/show/452234/java.svg
https://www.svgrepo.com/show/353925/javascript.svg
https://www.svgrepo.com/show/354478/typescript-icon.svg
https://cdn-icons-png.flaticon.com/128/6132/6132222.png
https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png
https://www.svgrepo.com/show/512317/github-142.svg
https://www.svgrepo.com/show/374171/vscode.svg
https://www.svgrepo.com/show/303251/mysql-logo.svg
https://www.svgrepo.com/show/303170/adobe-photoshop-cs6-logo.svg



https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png
https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/640px-Laravel.svg.png
https://commons.wikimedia.org/wiki/File:Wondershare_filmora_logo.svg
https://commons.wikimedia.org/wiki/File:C-Sharp_Logo.svg
https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/640px-Microsoft_Office_Access_%282019-present%29.svg.png
*/

/*
SVG Open Sources: 
https://commons.wikimedia.org/wiki/Main_Page
https://www.svgrepo.com/
https://cdn-icons-png.flaticon.com
https://www.logo.wine/
*/

/*Disclaimer:
This website is developed using Tailwind CSS with the Vite + React framework. 
It incorporates icons from the Fortawesome Free Icon Package and SVG resources from the free providers listed below. 
All credits for the resources used in this portfolio are attributed to their respective owners.

This website is non-commercial and freely accessible as a token of appreciation to the resource providers mentioned. 
Please feel free to explore and benefit from the excellent opportunities they offer. 



© 2025 Paul Rey Morales Cabas. All Rights Reserved.
Please refrain from sharing any content or information from this portfolio website without the owner's permission.
*/
