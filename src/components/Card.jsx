export default function Card({ title, image, category, price }) {
  function capitalizeWords(string) {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function decimalPlace(number) {
    return number.toFixed(2);
  }

  return (
    <div className="mt-10 w-3/4 flex-row justify-items-center border-2 p-4 tablet:w-1/2 lapt:w-1/4 laptL:w-1/6">
      <img className="mt-5 h-1/2" src={image} />
      <div className="mt-3 w-full content-end pl-3">
        <p className="font-bold">{title}</p>
        <p className="italic">{capitalizeWords(category)}</p>
        <p>${decimalPlace(price)}</p>
      </div>
    </div>
  );
}
