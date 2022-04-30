import logo from "./logo.svg";
import { Formik, useFormik } from "formik";
import "./App.css";
import axios from "axios";

function App() {
  const formik=useFormik({
    initialValues:{email:"",password:""},
    validate:(values)=>{
      const errors={};
      if (!values.email) {
        errors.title = "Required Title";
      }
      if (!values.password) {
        errors.completed = "Required Completed";
      }
      return errors;
    },
    onSubmit:(values) => {
      
      axios
        .post("https://jsonplaceholder.typicode.com/todos/", {
          body: JSON.stringify(values)
        })
        .then(function (response) {
          console.log(response,"hi");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  })

  const {handleChange,handleSubmit,values,errors}=formik
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      className="App"
    >
      <div>
        <h1>TO DO </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
      
          onChange={handleChange}
        />
        {/* {errors.title ? errors.title : null} */}
        <br />
        <label htmlFor="completed">Password</label>
        <input
          type="text"
          name="password"
          value={values.password}
          
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
