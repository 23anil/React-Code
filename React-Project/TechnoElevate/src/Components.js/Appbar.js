import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Appbar({ getdata }) {
  let navigator = useNavigate();

  let gotoquestions = () => {
    navigator("/Questions");
  };

  let gotoHomepage = () => {
    navigator("/home");
  };

  const [technologyerror, settechnologyerror] = useState("");
  const [levelerror, setlevelerror] = useState("");
  const [fromdateerror, setfromdateerror] = useState("");
  const [todate, settodate] = useState("");
  const [searcherror, setsearcherror] = useState("");
  const [userquestion, setuserquestion] = useState({
    question: "",
    technology: "",
    level: "",
    fromdate: "",
    toDate: "",
  });

  let { question, technology, level, fromdate, toDate } = userquestion;

  let getqustion = (event) => {
    setuserquestion({
      ...userquestion,
      [event.target.name]: event.target.value,
    });
  };
  const [questions, setqustions] = useState([]);
  let search = async () => {
    try {
      let responce = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await responce.json();
      setqustions(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  let validsearch = () => {
    let rizex = /^[a-zA-Z]{2,100}$/;
    if (question) {
      if (rizex.test(question)) {
        setsearcherror("");
        getdata(questions);
        return true;
      } else {
        setsearcherror("this passage accepct only characters");
      }
    } else {
      setsearcherror("please fill the passage");
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
        settechnologyerror("invalid");
      }
    } else {
      settechnologyerror("required");
    }
  };

  let validLevel = () => {
    if (level) {
      if (level === "Basic" || level === "Medium" || level === "Difficult") {
        setlevelerror("");
        return true;
      } else {
        setlevelerror("invalid");
      }
    } else {
      setlevelerror("required");
    }
  };

  let date = new Date();
  let Cdate = date.getDate();
  let tomonth = date.getMonth() + 1;
  let toYear = date.getFullYear();
  let todaydate = `${toYear}-${tomonth}-${Cdate}`;

  let validfromdate = () => {
    if (fromdate) {
      if (fromdate < toDate && fromdate < todaydate) {
        setfromdateerror("");
        return true;
      } else {
        setfromdateerror("invalid");
      }
    } else {
      setfromdateerror("required");
    }
  };

  let validtodate = () => {
    if (toDate) {
      if (toDate <= todaydate) {
        settodate("");
        return true;
      } else {
        settodate("invalid");
      }
    } else {
      settodate("required");
    }
  };

  let validateall = () => {
    validtechnology();
    validLevel();
    validfromdate();
    validsearch();
    validtodate();
    if (
      validtechnology() &&
      validLevel() &&
      validfromdate() &&
      validsearch() &&
      validtodate()
    ) {
      gotoquestions();
    }
  };

  return (
    <div>
      <div className="header">
        <nav className="navbar ms-5 ">
          <img
            src="logo2.png"
            alt="Logo"
            width={200}
            height={30}
            className="d-inline-block align-text-top "
            onClick={gotoHomepage}
          />
        </nav>
        <div className="technology" name="technology">
          <select
            name="technology"
            id="courses"
            className="technology01"
            value={userquestion.technology}
            onInput={(event) => {
              getqustion(event);
            }}
          >
            <option>Technology</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
            <option value="AI">AI</option>
          </select>
          {technologyerror && <p className="errorsms">*{technologyerror}</p>}
        </div>
        <div className="level">
          <select
            name="level"
            id="courses"
            className="level01"
            value={userquestion.level}
            onInput={(event) => {
              getqustion(event);
            }}
          >
            <option>Level</option>
            <option value="Difficult">Difficult</option>
            <option value="Medium">Medium</option>
            <option value="Basic">Basic</option>
          </select>

          {levelerror && <p className="errorsms">*{levelerror}</p>}
        </div>
        <div className="fromdate">
          <input
            type="date"
            placeholder="From Date"
            className="fromdate01"
            name="fromdate"
            value={userquestion.fromdate}
            onInput={(event) => {
              getqustion(event);
            }}
          />
          {fromdateerror && <p className="errorsms">*{fromdateerror}</p>}
        </div>
        <div className="todate">
          <input
            type="date"
            placeholder="To Date"
            className="todate01"
            name="toDate"
            value={userquestion.toDate}
            onInput={(event) => {
              getqustion(event);
            }}
          />
          {todate && <p className="errorsms">*{todate}</p>}
        </div>
        <div className="search-box">
          <input
            type="Search"
            placeholder="Search Question"
            className="search-box01"
            name="question"
            value={userquestion.question}
            onInput={(event) => {
              getqustion(event);
            }}
          />
          {searcherror && <p className="errorsms">*{searcherror}</p>}
        </div>
        <div className="button-box">
          <button
            className="search-btn"
            onClick={() => {
              validateall();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
