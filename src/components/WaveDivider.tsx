type WaveDividerProps = {
  fill: string;
  flip?: boolean;
  className?: string;
};

export function WaveDivider({ fill, flip = false, className = "" }: WaveDividerProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 h-16 w-full sm:h-24 ${
        flip ? "top-0 scale-y-[-1]" : "bottom-0"
      } ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M0,64 C240,120 480,0 720,32 C960,64 1200,128 1440,64 L1440,120 L0,120 Z"
      />
    </svg>
  );
}
