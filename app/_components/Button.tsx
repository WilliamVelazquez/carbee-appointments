function Button({ disabled, type, className, additionalClass, children, ...attributes }: ButtonProps) {
  const defaultClassName = "w-full text-white bg-primary hover:bg-primary-dark disabled:bg-primary-light focus:ring-2 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-dark dark:focus:ring-secondary active:scale-95";

  return (
    <button
      type={type || "button"}
			disabled={disabled || false}
      className={className || (additionalClass ? defaultClassName + ' ' + additionalClass : defaultClassName)}
      {...attributes}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
	disabled?: boolean,
	type?: 'button' | 'reset' | 'submit',
	className?: string,
	additionalClass?: string,
	children?: React.ReactNode,
	[key: string]: any
}

export default Button;
