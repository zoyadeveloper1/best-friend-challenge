import { useEffect, useState } from "react";
import API from "../api/axios";

function Result() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const participantId = Number(
    localStorage.getItem("participantId")
  );



  useEffect(() => {

    fetchResult();

  }, []);




  const fetchResult = async () => {

    try {


      const answerRes = await API.get("/answers/");
      const questionRes = await API.get("/questions/");



      const myAnswers = answerRes.data.filter(

        (item) =>
          item.participant === participantId

      );




      const finalResult = myAnswers.map((ans)=>{


        const question = questionRes.data.find(

          (q)=>
            q.id === ans.question

        );



        if(!question){

          return null;

        }




        return {

          question: question.question,

          selected: ans.selected_answer,

          correct: question.answer,


          status:

            ans.selected_answer === question.answer

            ? "Correct"

            : "Wrong"


        };


      }).filter(Boolean);




      setResult(finalResult);



    } catch(error){


      console.log(error);

      alert("Unable to load result");


    }
    finally {

      setLoading(false);

    }


  };




  const correctAnswers = result.filter(

    (item)=>
      item.status === "Correct"

  ).length;




  const percentage =

    result.length > 0

    ? Math.round(
        (correctAnswers / result.length) * 100
      )

    : 0;





  if(loading){

    return (

      <div className="text-center mt-5">

        <h3>
          Loading Result... ⏳
        </h3>

      </div>

    );

  }





  return (

    <div
      className="container-fluid d-flex justify-content-center"
      style={{
        minHeight:"100vh",
        paddingTop:"50px",
        background:
        "linear-gradient(135deg,#667eea,#764ba2)"
      }}
    >



      <div
        className="card shadow-lg p-4"
        style={{
          width:"700px",
          borderRadius:"25px"
        }}
      >



        <div className="text-center">


          <h1>
            🏆 Quiz Result
          </h1>



          <h3 className="text-success mt-3">

            Match Percentage : {percentage}%

          </h3>



        </div>



        <hr />



        <h5>
          Total Questions : {result.length}
        </h5>


        <h5>
          Correct Answers : {correctAnswers}
        </h5>




        {
          result.length === 0 &&

          <div className="alert alert-warning">

            No answers found.

          </div>

        }





        {
          result.map((item,index)=>(


            <div

              className="card p-3 mb-3"

              key={index}

            >



              <h5>

                Q{index + 1}. {item.question}

              </h5>




              <p>

                Your Answer :

                <b>
                  {" "}{item.selected}
                </b>

              </p>




              <p>

                Correct Answer :

                <b>
                  {" "}{item.correct}
                </b>

              </p>




              {
                item.status === "Correct"

                ?

                <span className="text-success fw-bold">

                  ✅ Correct Answer

                </span>


                :

                <span className="text-danger fw-bold">

                  ❌ Wrong Answer

                </span>

              }



            </div>


          ))
        }



      </div>



    </div>

  );

}


export default Result;