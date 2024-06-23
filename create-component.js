const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src/app/components', componentName);
if (fs.existsSync(componentDir)) {
  console.error('Component already exists.');
  process.exit(1);
}

fs.mkdirSync(componentDir);

const tsxContent = `
'use client'
import React from 'react';
import styles from './${componentName}.module.css';

interface ${componentName}Props {
}

const ${componentName}: React.FC = ({}: ${componentName}Props) => {
  return (
    <div className={styles.container}>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

const cssContent = `.container {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(
  path.join(componentDir, `${componentName}.module.css`),
  cssContent,
);

console.log(`Component ${componentName} created successfully.`);
