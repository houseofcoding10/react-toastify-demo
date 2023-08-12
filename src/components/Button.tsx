const Button = ({
  title,
  type,
  onClick,
}: {
  title: string;
  type: string;
  onClick: (alertType: string) => void;
}) => {
  const className = `${type} button`;
  return (
    <div className='button-container'>
      <button onClick={() => onClick(type)} className={className}>
        {title}
      </button>
    </div>
  );
};

export default Button;
