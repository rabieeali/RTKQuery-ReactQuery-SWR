const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        style={{ inset: 0 }}
        className='spinner-border position-absolute m-auto'
        role='status'></div>
    </div>
  );
};

export default Spinner;
