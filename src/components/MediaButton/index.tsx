import React, { ButtonHTMLAttributes } from 'react';

interface IMediaButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MediaButton: React.FC<IMediaButton> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default MediaButton;
