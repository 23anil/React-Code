import React, { useState } from "react";
import { useNavigate } from "react-router";

function AddQuestion() {
  let navigator = useNavigate();

  let gotoupdated = () => {
    navigator("/updated");
  };

  const [QuestionAns, setQuestionAns] = useState([
    {
      question: "",
      answer: "",
      deletedBtn: false,
    },
  ]);

  console.log("QuestionAns", QuestionAns);

  let addfields = () => {
    const values = [...QuestionAns];
    values.push({
      question: "",
      answer: "",
      deletedBtn: true,
    });
    setQuestionAns(values);
  };

  // let removefields = (index) => {
  //   const values = [...QuestionAns];
  //   values.splice(index, 1);
  //   setQuestionAns(values);
  // };

  const [candidatenameerror, setcandidatenameerror] = useState("");
  const [departmenterror, setdepartmenterror] = useState("");
  const [clinterror, setclinterror] = useState("");
  const [inerviewlevelerror, setclinerviewlevelerror] = useState("");
  const [technologyerror, settechnologyerror] = useState("");
  const [questionerror, setquestionerror] = useState("");

  const [Questiondetails, setQuestiondetails] = useState({
    candidatename: "",
    department: "",
    clintname: "",
    inerviewlevel: "",
    technology: "",
    question: "",
  });
  let {
    candidatename,
    department,
    clintname,
    inerviewlevel,
    technology,
    question,
  } = Questiondetails;
  console.log(Questiondetails);
  let recivedata = (event, index) => {
    console.log("index", index);
    setQuestiondetails({
      ...Questiondetails,
      [event.target.name]: event.target.value,
    });

    const values = [...QuestionAns];
    if (event.target.name === "question") {
      values[index].question = event.target.value;
    }
    //  else {
    //   values[index].answer = event.target.value;
    // }
    setQuestionAns(values);
  };

  let validname = () => {
    if (candidatename) {
      let rizex = /^[a-zA-Z]{2,30}$/;
      if (rizex.test(candidatename)) {
        setcandidatenameerror("");
        return true;
      } else {
        setcandidatenameerror("invalid candidate name");
      }
    } else {
      setcandidatenameerror("candidate name required");
    }
  };

  let validclintname = () => {
    if (clintname) {
      let rizex = /^[a-zA-Z]{2,30}$/;
      if (rizex.test(clintname)) {
        setclinterror("");
        return true;
      } else {
        setclinterror("invalid clint name");
      }
    } else {
      setclinterror("clint name required");
    }
  };

  let validquestion = () => {
    let rizex = /^[a-zA-Z]{3,50}$/;
    if (rizex.test(question)) {
      setquestionerror("");
      return true;
    } else {
      setquestionerror("question required");
    }
  };

  let validdepartment = () => {
    if (department) {
      if (
        department === "HR" ||
        department === "IT" ||
        department === "BPO" ||
        department === "TS"
      ) {
        setdepartmenterror("");
        return true;
      } else {
        setdepartmenterror("invalid department select");
      }
    } else {
      setdepartmenterror("department required");
    }
  };

  let validinerviewlevel = () => {
    if (inerviewlevel) {
      if (
        inerviewlevel === "Difficult" ||
        inerviewlevel === "Medium" ||
        inerviewlevel === "Basic"
      ) {
        setclinerviewlevelerror("");
        return true;
      } else {
        setclinerviewlevelerror("invalid inerviewlevel select");
      }
    } else {
      setclinerviewlevelerror("inerviewlevel required");
    }
  };

  let validtechnology = () => {
    if (technology) {
      if (
        technology === "Java" ||
        technology === "C++" ||
        technology === "AI" ||
        technology === "Python"
      ) {
        settechnologyerror("");
        return true;
      } else {
        settechnologyerror("invalid technology select");
      }
    } else {
      settechnologyerror("technology required");
    }
  };

  let validateall = () => {
    validname();
    validclintname();
    validquestion();
    validdepartment();
    validinerviewlevel();
    validtechnology();
    if (
      validname() &&
      validclintname() &&
      validquestion() &&
      validdepartment() &&
      validinerviewlevel() &&
      validtechnology()
    ) {
      gotoupdated();
      setQuestiondetails({...Questiondetails,
        candidatename: "",
        department: "",
        clintname: "",
        inerviewlevel: "",
        technology: "",
        question: "",
      })
    }
  };

  return (
    <div className="outerdiv">
      <div className="maindiv">
        <p className="subhead">Upload your Questions</p>
        <div className="details-div">
          <div className="candidate-name-div">
            <form className="h-100">
              <input
                className="candidate-name"
                placeholder="Candidate Name"
                type="text"
                name="candidatename"
                value={Questiondetails.candidatename}
                onChange={(event) => {
                  recivedata(event);
                }}
              />
            </form>
            {candidatenameerror && (
              <p className="errormessage">*{candidatenameerror}</p>
            )}
          </div>
          <div className="department-div">
            <select
              className="department"
              name="department"
              id="department"
              onChange={(event) => {
                recivedata(event);
              }}
              value={Questiondetails.department}
            >
              <option value="Department">Department</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="BPO">BPO</option>
              <option value="TS">Technical Support</option>
            </select>
            {departmenterror && (
              <p className="errormessage">*{departmenterror}</p>
            )}
          </div>
          <div className="client-name-div">
            <input
              className="client-name"
              placeholder="Client Name"
              type="text"
              name="clintname"
              value={Questiondetails.clintname}
              onChange={(event) => {
                recivedata(event);
              }}
            />
            {clinterror && <p className="errormessage">*{clinterror}</p>}
          </div>
          <div className="inerview-level-div">
            <select
              className="inerview-level"
              name="inerviewlevel"
              value={Questiondetails.inerviewlevel}
              onChange={(event) => {
                recivedata(event);
              }}
            >
              <option>Inerview-Level</option>
              <option value={"Difficult"}>Difficult</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Basic"}>Basic</option>
            </select>
            {inerviewlevelerror && (
              <p className="errormessage">*{inerviewlevelerror}</p>
            )}
          </div>
          <div className="qs-technology-div">
            <select
              className="qs-technology"
              name="technology"
              value={Questiondetails.technology}
              onChange={(event) => {
                recivedata(event);
              }}
            >
              <option value={0}>Technology</option>
              <option value={"Java"}>Java</option>
              <option value={"Python"}>Python</option>
              <option value={"C++"}>C++</option>
              <option value={"AI"}>AI</option>
            </select>
            {technologyerror && (
              <p className="errormessage">*{technologyerror}</p>
            )}
          </div>
        </div>
      </div>

      {QuestionAns.map((input, idx) => (
        <div className="Qustion-answer-div" key={`${input}~${idx}`}>
          <div className="Qustion-div">
            <input
              type="text"
              placeholder="Question"
              className="question"
              name="question"
              value={QuestionAns[idx].question}
              onChange={(event) => {
                recivedata(event, idx);
              }}
            />
            {questionerror && <p className="errormessage">*{questionerror}</p>}
          </div>
          <div className="Answer-div">
            <textarea
              placeholder="Answer"
              rows="4"
              cols="50"
              className="answer"
              name="answer"
              value={QuestionAns.answer}
              onChange={(event) => {
                recivedata(event, idx);
              }}
            />
          </div>
          <div className="add-btn-div">
            <button className="add-btn" onClick={addfields}>
              {QuestionAns[idx].deletedBtn ? " ➖ Remove" : "➕ Add New"}
            </button>
          </div>
          <div className="remove-btn-div">
            {/* <button
              className="remove-btn"
              onClick={() => {
                removefields(idx);
              }}
            >
              ➖ Remove
            </button> */}
          </div>
        </div>
      ))}

      <div className="submit-btn-div">
        <button className="submit-btn" type="submit" onClick={validateall}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
