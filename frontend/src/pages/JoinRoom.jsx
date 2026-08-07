import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


function JoinRoom() {

  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(false);



  const handleJoin = async () => {


    if (name.trim() === "" || roomCode.trim() === "") {

      alert("Please enter Name and Room Code");
      return;

    }



    try {


      setLoading(true);



      // Get all rooms

      const roomResponse = await API.get("/rooms/");


      console.log(
        "Room List:",
        roomResponse.data
      );



      const room = roomResponse.data.find(

        (item) =>
          item.room_code === roomCode.trim().toUpperCase()

      );



      if (!room) {

        alert("Invalid Room Code");
        return;

      }



      console.log(
        "Selected Room:",
        room
      );




      // Participant data

      const participantData = {

        room: room.id,

        name: name.trim()

      };



      console.log(
        "Sending Participant:",
        participantData
      );





      const response = await API.post(

        "/participants/",

        participantData

      );




      console.log(
        "Participant Created:",
        response.data
      );





      // Save data

      localStorage.setItem(

        "participantId",

        response.data.id

      );



      localStorage.setItem(

        "roomId",

        room.id

      );



      localStorage.setItem(

        "playerName",

        name.trim()

      );




      alert("Joined Successfully 🎉");



      navigate("/quiz");




    }

    catch(error) {


      console.log(

        "Join Error:",

        error.response?.data || error

      );



      if(error.response){

        alert(
          JSON.stringify(error.response.data)
        );

      }

      else{

        alert(
          "Backend not reachable. Start Django server."
        );

      }


    }

    finally {


      setLoading(false);


    }



  };





  return (

    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{

        minHeight:"100vh",

        background:
        "linear-gradient(135deg,#667eea,#764ba2)"

      }}
    >



      <div
        className="card shadow-lg p-5"
        style={{

          width:"450px",

          borderRadius:"25px"

        }}
      >



        <div className="text-center">


          <img

            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"

            alt="join"

            width="120"

            className="mb-3"

          />



          <h2 className="fw-bold">

            🚪 Join Quiz Room

          </h2>



          <p className="text-muted">

            Enter your details and join the challenge

          </p>



        </div>





        <input

          type="text"

          className="form-control mt-3"

          placeholder="Enter Your Name"

          value={name}

          onChange={(e)=>
            setName(e.target.value)
          }

        />





        <input

          type="text"

          className="form-control mt-3"

          placeholder="Enter Room Code"

          value={roomCode}

          onChange={(e)=>

            setRoomCode(
              e.target.value.toUpperCase()
            )

          }

        />





        <button

          className="btn btn-primary btn-lg mt-4"

          onClick={handleJoin}

          disabled={loading}

        >

          {

            loading

            ?

            "Joining..."

            :

            "🚀 Join Room"

          }


        </button>



      </div>



    </div>


  );

}


export default JoinRoom;