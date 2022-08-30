import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import cn from 'classnames';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  resetAfter?: number;
}

export const Button = React.memo<ButtonProps>(
  ({ className, children, resetAfter = 1000, onClick, ...props }) => {
    const [active, setActive] = useState(false);
    const classes = cn('button', className, { active });

    useEffect(() => {
      if (active) {
        setTimeout(() => {
          setActive(false);
        }, resetAfter);
      }
    }, [resetAfter, active]);

    const handleClick = () => {
      setActive(true);

      if (onClick) {
        onClick();
      }
    };

    return (
      <button className={classes} onClick={handleClick} {...props}>
        {children}
      </button>
    );
  },
);
