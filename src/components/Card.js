const Card = (props) => {
  return (
    <div className="card bg-gray-600 text-white text-left border max-h-80 w-96 rounded-xl shadow-lg overflow-y-auto">
      <div className="card-body">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-l">{props.text}</p>
        <div>{props.content}</div>
      </div>
    </div>
  );
};
export default Card;
