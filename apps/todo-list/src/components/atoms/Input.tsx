import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  children: React.ReactNode;
  className?: string;
};
const Input: React.FC<InputProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'flex flex-col',
        { 'gap-1': !className?.includes('gap') },
        className
      )}
    >
      {children}
    </div>
  );
};

Input.displayName = 'Input';

type InputInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  error?: string;
  label?: string;
  labelClassName?: string;
  description?: string;
  descriptionClassName?: string;
};
const InputInput = forwardRef<HTMLInputElement, InputInputProps>(
  (
    {
      name,
      error,
      label,
      labelClassName,
      description,
      descriptionClassName,
      ...rest
    },
    ref
  ) => {
    //* render
    return (
      <>
        {label && (
          <label
            htmlFor={name}
            className={clsx('form-input-label-primary', labelClassName)}
          >
            {label}
          </label>
        )}
        <input id={name} {...rest} ref={ref} name={name} />
        {description && (
          <p
            className={clsx(
              'form-input-description-primary',
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}
        {error && <span className="form-error-message">{error}</span>}
      </>
    );
  }
);

InputInput.displayName = 'InputInput';

export default Object.assign(Input, {
  Input: InputInput,
});
