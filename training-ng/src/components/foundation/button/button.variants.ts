import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 px-2',
  {
    variants: {
      color: {
        default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
        grey: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
      },
      disabled: {
        true: 'bg-gray-300 text-white hover:bg-gray-300 hover:text-white cursor-not-allowed disabled:cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  },
);
