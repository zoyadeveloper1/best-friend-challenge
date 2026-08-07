import { useState } from "react";
import API from "../api/axios";

function CreateQuiz() {

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ]);


  const handleQuestionChange = (index, value) => {

    const data = [...questions];
    data[index].question = value;
    setQuestions(data);

  };


  const handleOptionChange = (qIndex, oIndex, value) => {

    const data = [...questions];
    data[qIndex].options[oIndex] = value;
    setQuestions(data);

  };


  const handleAnswerChange = (index, value) => {

    const data = [...questions];
    data[index].answer = value;
    setQuestions(data);

  };


  const addQuestion = () => {

    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);

  };


  const saveQuestions = async () => {

    const roomId = localStorage.getItem("roomId");


    if (!roomId) {

      alert("Please create a room first");

      return;

    }


    try {


      for (const q of questions) {


        if (
          !q.question ||
          !q.options[0] ||
          !q.options[1] ||
          !q.options[2] ||
          !q.options[3] ||
          !q.answer
        ) {

          alert("Please fill all question details");

          return;

        }



        await API.post("/questions/", {

          room: Number(roomId),

          question: q.question,

          option1: q.options[0],

          option2: q.options[1],

          option3: q.options[2],

          option4: q.options[3],

          answer: q.answer,

        });


      }


      alert("Questions Saved Successfully!");


    } catch (error) {


      console.log(error);


      if (error.response) {

        alert(JSON.stringify(error.response.data));

      } else {

        alert("Backend not reachable");

      }


    }

  };



  return (

    <div className="container mt-5">


      <div className="card shadow p-4">


        <h2 className="mb-4">
          📝 Create Quiz Questions
        </h2>



        {
          questions.map((q, index) => (

            <div
              key={index}
              className="border rounded p-3 mb-4"
            >


              <h5>
                Question {index + 1}
              </h5>



              <input

                type="text"

                className="form-control mb-2"

                placeholder="Enter Question"

                value={q.question}

                onChange={(e) =>
                  handleQuestionChange(
                    index,
                    e.target.value
                  )
                }

              />



              {
                q.options.map((option, i) => (

                  <input

                    key={i}

                    type="text"

                    className="form-control mb-2"

                    placeholder={`Option ${i + 1}`}

                    value={option}

                    onChange={(e) =>
                      handleOptionChange(
                        index,
                        i,
                        e.target.value
                      )
                    }

                  />

                ))
              }




              <input

                type="text"

                className="form-control"

                placeholder="Correct Answer"

                value={q.answer}

                onChange={(e) =>
                  handleAnswerChange(
                    index,
                    e.target.value
                  )
                }

              />



            </div>

          ))
        }



        <button

          className="btn btn-primary me-2"

          onClick={addQuestion}

        >

          + Add Question

        </button>



        <button

          className="btn btn-success mt-3"

          onClick={saveQuestions}

        >

          Save Questions

        </button>



      </div>


    </div>

  );

}


export default CreateQuiz;