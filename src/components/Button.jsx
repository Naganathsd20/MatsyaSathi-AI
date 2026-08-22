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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2 min-h-[42px]",
    lg: "px-6 py-3 text-base gap-2.5 min-h-[48px]"
  };

  const variantStyles = {
    primary: "ocean-gradient-btn text-white shadow-md shadow-sky-900/30 border border-sky-400/20 hover:border-sky-300/40",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600 shadow-sm",
    outline: "bg-transparent text-sky-400 border border-sky-500/40 hover:bg-sky-500/10 hover:border-sky-400",
    accent: "bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold shadow-md shadow-teal-900/30",
    danger: "bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-900/30 border border-rose-500/30"
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
