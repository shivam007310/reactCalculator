const buttons = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div>
      {buttonNames.map((buttonName) => {
        <button>{buttonName}</button>;
      })}
    </div>
  );
};
export default buttons;
