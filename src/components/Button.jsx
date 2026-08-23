import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon = null,
  iconPosition = 'left',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 min-h-[36px]",
    md: "px-4 py-2 text-sm gap-2 min-h-[42px]",
    lg: "px-6 py-3 text-base gap-2.5 min-h-[48px]"
  };

  const variantStyles = {
    primary: "ocean-gradient-btn text-white shadow-xs border border-cyan-400/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    secondary: "bg-[#0B253C] text-cyan-300 hover:text-white hover:bg-[#0E2F4C] border border-cyan-900/60 shadow-2xs",
    outline: "bg-[#071F33]/80 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-2xs",
    accent: "bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-xs",
    danger: "bg-rose-600 hover:bg-rose-500 text-white font-bold shadow-xs"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={`w-4 h-4 shrink-0 ${size === 'lg' ? 'w-5 h-5' : ''}`} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={`w-4 h-4 shrink-0 ${size === 'lg' ? 'w-5 h-5' : ''}`} />}
    </button>
  );
};

export default Button;
