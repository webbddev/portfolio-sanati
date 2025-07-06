const LineSeparator = ({ className = 'border-black' }) => {
  return (
    <div
      className={`absolute border-[3px] md:border-3 w-full left-0 top-[163px] sm:top-[209px] lg:top-[227px] ${className}`}
    />
  );
};

export default LineSeparator;
