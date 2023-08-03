import { Button } from "@/components/ui/button";
import { setCookie } from "@/lib/cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomName } from "@/redux/features/register_slice";
import InputError from "@/components/core/input-error/input-error";
import Backlink from "@/components/core/backlink/backlink";

const RoomName = () => {
  // router
  const router = useRouter();
  // roomData
  const { roomData } = useSelector((state) => state.registerData);
  // dispatch
  const dispatch = useDispatch();
  // roomnameState
  const [roomname, setRoomname] = useState(
    roomData.roomName ? roomData.roomName : null
  );
  const [errorMessage, setErrorMessage] = useState(null);
  // submit & validation
  const handleOnSubmit = () => {
    if (!roomname) {
      setErrorMessage("Room name is required!");
    } else {
      // dispatch
      dispatch(
        roomName({
          roomName: roomname,
        })
      );

      // setCookie
      setCookie("roomData", { ...roomData, roomName: roomname }, "1h");

      // router
      router.push("/register/hotel/room-price");
    }
  };

  return (
    <div className="section-d grid grid-cols-1 gap-5 max-w-[400px]">
      <Backlink link="/register/hotel/room-features" text="Room features" />
      <h3 className="font-bold">{`What's the name of this room?`}</h3>
      <p>
        This is the name that guests will see on your property page. Choose a
        name that most accurately describe this room
      </p>
      <div className="grid grid-cols-1 gap-2 ">
        <label>Room name</label>
        <input
          defaultValue={roomname}
          onChange={(e) => {
            setRoomname(e.target.value);
            if (errorMessage) {
              setErrorMessage(null);
            }
          }}
        />
        <InputError error={errorMessage} />
        <Button onClick={handleOnSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default RoomName;
