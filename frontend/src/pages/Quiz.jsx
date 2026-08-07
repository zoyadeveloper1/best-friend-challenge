import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


function Quiz() {

  const navigate = useNavigate();


  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);


  const participantId =
    localStorage.getItem("participantId");



  useEffect(() => {

    fetchQuestions();

  }, []);




  // Timer

  useEffect(() => {


    if(
      loading ||
      questions.length === 0 ||
      locked
    ){
      return;
    }



    const timer = setInterval(()=>{


      setTimeLeft((prev)=>{


        if(prev <= 1){

          clearInterval(timer);

          goNextQuestion();

          return 30;

        }


        return prev - 1;


      });


    },1000);



    return ()=>clearInterval(timer);



  },[
    current,
    loading,
    locked
  ]);






  // Get Questions

  const fetchQuestions = async()=>{


    try{


      const response =
      await API.get("/questions/");



      console.log(
        "Questions:",
        response.data
      );



      // Showing all questions

      setQuestions(
        response.data
      );



    }
    catch(error){


      console.log(
        error
      );


      alert(
        "Unable to load questions"
      );


    }
    finally{


      setLoading(false);


    }


  };






  // Save Answer

  const submitAnswer = async()=>{


    if(!selectedAnswer){

      alert(
        "Please select answer"
      );

      return;

    }



    try{


      setLocked(true);



      await API.post(

        "/answers/",

        {

          participant:
          Number(participantId),


          question:
          questions[current].id,


          selected_answer:
          selectedAnswer

        }


      );



      goNextQuestion();



    }
    catch(error){


      console.log(
        error
      );


      alert(
        "Answer save failed"
      );


      setLocked(false);


    }



  };






  const goNextQuestion = ()=>{


    setSelectedAnswer("");

    setLocked(false);

    setTimeLeft(30);



    if(
      current < questions.length - 1
    ){

      setCurrent(
        current + 1
      );


    }
    else{


      alert(
        "Quiz Completed 🎉"
      );


      navigate("/result");


    }


  };







  if(loading){

    return (

      <div className="container mt-5 text-center">

        <h3>
          Loading Questions...
        </h3>

      </div>

    );

  }






  if(questions.length === 0){

    return (

      <div className="container mt-5 text-center">

        <h3>
          No Questions Found
        </h3>


      </div>

    );

  }






  const question =
  questions[current];





  return (

    <div className="container mt-5">


      <div className="d-flex justify-content-between mb-3">


        <h4>

          Question {current + 1}
          /
          {questions.length}

        </h4>




        <span className="badge bg-danger fs-5">

          ⏳ {timeLeft}s

        </span>


      </div>







      <div className="card shadow p-4">


        <h3 className="mb-4">

          {question.question}

        </h3>





        {
          [
            question.option1,
            question.option2,
            question.option3,
            question.option4

          ].map(

            (option,index)=>(


              <div
                className="form-check mb-3"
                key={index}
              >


                <input

                  type="radio"

                  className="form-check-input"

                  id={
                    `option-${index}`
                  }

                  value={option}

                  checked={
                    selectedAnswer === option
                  }

                  disabled={locked}

                  onChange={
                    (e)=>
                    setSelectedAnswer(
                      e.target.value
                    )
                  }

                />



                <label

                  className="form-check-label"

                  htmlFor={
                    `option-${index}`
                  }

                >

                  {option}

                </label>


              </div>


            )

          )
        }






        <button

          className="btn btn-success mt-3"

          onClick={submitAnswer}

          disabled={locked}

        >

          {
            current === questions.length - 1

            ?

            "Finish Quiz"

            :

            "Next Question"

          }


        </button>



      </div>



    </div>

  );

}


export default Quiz;