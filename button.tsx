import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
