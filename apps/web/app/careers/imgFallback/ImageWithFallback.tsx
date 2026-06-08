import React, { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  style,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  const placeholder = fallbackSrc ||
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230f0f0f'/%3E%3C/svg%3E`;

  return (
    <img
      src={errored ? placeholder : src}
      alt={alt}
      style={style}
      className={className}
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}
