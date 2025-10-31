const btnStyle = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary/40 active:scale-95 shadow-primary",
  secondary:
    "bg-surface text-text border border-border hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary/20 active:translate-y-0.5 shadow-soft",
  success:
    "bg-success text-white hover:bg-success/90 focus:ring-2 focus:ring-offset-2 focus:ring-success/30 active:scale-95 shadow-soft",
  error:
    "bg-error text-white hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-error/30 active:scale-95 shadow-soft",
};

const btnSize = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn inline-flex items-center justify-center gap-2 rounded-md ${btnStyle[variant]} ${btnSize[size]} font-body transition-transform duration-150 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
