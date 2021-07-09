import React, { useState } from "react";
import img1 from "../img/saurabh pic.jpeg"
import img2 from "../img/shubham gate.jpg"

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    isActive: false,
    city: "",
    selectedCompany: 'company1',
  });

   const getInitialState =() => {
    return {
      companies:[
        { name: 'company1',  jobs: ['job1-1', 'job1-2', 'job1-3']},
        { name: 'company2', jobs: ['job2-1', 'job2-2', 'job2-3']},
        { name: 'company3', jobs: ['job3-1', 'job3-2', 'job3-3']}
      ],
 
    }
  }

//  const handleChange= function(e) =>{

//     this.setState({selectedCompany: e.target.value})
//   },



let company = this.state.companies.filter(company => {
    return company.name === this.state.selectedCompany
  })














//   const handleSubmit = (e) => {
//     // const name=e.name;
//     // const target=e.target;
//     // const value=target.value;
//     setUserDetails({
//       ...userDetails,
//       [e.target.name]:
//         e.target.type === "checkbox" ? e.target.checked : e.target.value,
//     });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
        ...userDetails,
        [e.target.name]: 
        e.target.type === "checkbox" ? e.target.checked : e.target.value
        
    
     })
    
    
        }

  let image;

  if (userDetails.gender === "male"){
      image = <img src={img1} style={{height: "300px", width: "300px"}} alt="" />
  } else if (userDetails.gender === "female") {
      image = <img src={img2} style={{height: "300px", width: "300px"}}alt="" />

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fname">FirstName</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={userDetails.firstName}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <label htmlFor="lname">LastName</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={userDetails.lastName}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          maxLength="10"
          value={userDetails.mobile}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          maxLength="12"
          value={userDetails.password}
          onChange={handleSubmit}
        />
        <br />
        <br />

        <label htmlFor="">Gender:- </label>

        <input
          type="radio"
          name="gender"
          id="male"
          // checked={userDetails.gender === "male"}
          value="male"
          defaultChecked
          onChange={handleSubmit}
        />
        <label htmlFor="">Male</label>

        <input
          type="radio"
          name="gender"
          checked={userDetails.gender === "female"}
          value="female"
          id="female"
          onChange={handleSubmit}
        />
        <label htmlFor="">FeMale</label>
        <br />
        <br />

        <label htmlFor="">Are you Active?</label>
        <input
          type="checkbox"
          id="status"
          name="isActive"
          checked={userDetails.isActive}
          value={true}
          onChange={handleSubmit}
        />
<br /><br />
<br /><br />

jobs
        <select>
          {
            
            company[0].jobs.map((job, i) => {
              return <option>{job}</option>
            })
          }
        </select>
        
        companies
        <select value={this.state.selectedCompany} onChange={this.handleChange.bind(this)}>
          {
            this.state.companies.map((company, i) => {
              return <option>{company.name}</option>
            })
          }
        </select>


        <br /><br />

<br /><br />
<button type="submit" onClick={handleSubmit}>Submit and View Data</button>




















      </form>
{image}
      <p>First Name is:{userDetails.firstName}</p>

      <p>Last Name is:{userDetails.lastName}</p>
      <p>Email :{userDetails.email}</p>
      <p>Password: {userDetails.password}</p>
      <p>Mobile: {userDetails.mobile}</p>
      <p>Gender: {userDetails.gender}</p>
      <p>CheckBox: {userDetails.isActive ? "Yes" : "No"}</p>
    </div>
  );
};

export default Form;
