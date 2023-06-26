const Alert = ({ message }: { message: string }) => {
  return (
    <div>
      <div className='alert alert-danger' role='alert'>
        {message}
      </div>
    </div>
  );
};

export default Alert;
