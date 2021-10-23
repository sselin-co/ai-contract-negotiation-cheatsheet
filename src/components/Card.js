const Card = (props) => {
  return (
    <div className=" bg-gray-600 text-white p-6 mt-6 text-left border w-96 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold">{props.title}</h3>
      <p className="mt-4 text-xl">{props.text}</p>
      <div>{props.content}</div>
    </div>
  );
};
export default Card;
