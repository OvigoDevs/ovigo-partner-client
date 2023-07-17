const RoomName = () => {
  return (
    <div className="section-d grid grid-cols-1 gap-5 max-w-[500px]">
      <h3 className="font-bold">{`What's the name of this room?`}</h3>
      <p>
        This is the name that guests will see on your property page. Choose a
        name that most accurately describe this room
      </p>
      <div className="grid grid-cols-1 gap-2">
        <label>Room name</label>
        <input />
      </div>
    </div>
  );
};

export default RoomName;
