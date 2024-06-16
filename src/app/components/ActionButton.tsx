import React from 'react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="rounded-br-[10px] rounded-tl-[10px] border border-[#FF6347] bg-[#FF6347] px-10 text-lg text-white"
      style={{ height: '48px' }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ActionButton;
