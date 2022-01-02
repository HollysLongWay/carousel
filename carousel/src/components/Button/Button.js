export function ControlButton({
  type = 'button',
  direction = 'prev',
  onClick: handleClick,
}) {
  const className = [
    'carousel-control',
    direction === 'prev' ? 'prev' : 'next',
  ].join(' ');
  const buttonText = direction === 'prev' ? '«' : '»';
  return (
    <button type={type} onClick={handleClick} className={className}>
      {buttonText}
    </button>
  );
}
