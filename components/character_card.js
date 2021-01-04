const CharacterCard = (props) => {
  return (
    <div className="py-8 border-2 border-opacity-25 transform px-8 mt-20 max-w-md mx-auto shadow-2xl rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      {/*<img*/}
      {/*  className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"*/}
      {/*  src="/img/erin-lindford.jpg"*/}
      {/*  alt="Woman's Face"*/}
      {/*></img>*/}
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src="/dice.svg"
        alt="20 sided dice"
      ></img>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Ranger</p>
          <p className="text-gray-500 font-medium">{props.ranger?.name}</p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Save
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="font-sm shadow-3xl rounded-lg shadow-md text-center">
          Move <p>{props.ranger?.stat.move}</p>
        </div>
        <div className="shadow-3xl rounded-lg shadow-md text-center">
          Fight <p>3</p>
        </div>
        <div className="shadow-3xl rounded-lg shadow-md text-center">
          Shoot <p>2</p>
        </div>
        <div className="shadow-3xl rounded-lg shadow-md text-center">
          Armour <p>3</p>
        </div>
        <div className="shadow-3xl rounded-lg shadow-md text-center">
          Will <p>9</p>
        </div>
        <div className="shadow-3xl rounded-lg shadow-md text-center">
          Health <p>1</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
