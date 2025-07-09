const LineSeparator = ({
  className = 'border-black',
  thickness = 'border-t-2',
  positioning = 'absolute inset-x-0',
}) => {
  return <div className={`${positioning} ${thickness} ${className} w-full`} />;
};

export default LineSeparator;

