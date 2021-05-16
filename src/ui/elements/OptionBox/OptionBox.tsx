import React, { ReactNode, useRef } from 'react';
import cx from 'classnames';

export default function OptionBox({
  type,
  onClick,
  children,
  selected,
  className,
}: {
  type?: string;
  className?: string;
  selected?: boolean;
  onClick(): void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const submitText = 'submit';

  return (
    <div className={className}>
      <div className="relative" style={{ '--aspect-ratio': 1 } as any}>
        <button
          type="button"
          className={cx(
            'text-black rounded-lg shadow-inner w-full flex flex-col justify-center items-center space-y-4',
            selected
              ? 'bg-primary text-white hover:bg-primary-lighter'
              : 'bg-white hover:bg-primary-lightest',
          )}
          onClick={() => {
            onClick();
            if (type === 'submit') {
              setTimeout(() => {
                ref.current?.click();
              }, 500);
            }
          }}
        >
          {children}
        </button>
        <If condition={type === 'submit'}>
          <button className="hidden" ref={ref} type="submit">
            {submitText}
          </button>
        </If>
      </div>
    </div>
  );
}
