// import { useState } from "react";

// export default function Form() {
//   let [firstName, setFirstName] = useState("");
//   let [lastName, setLastName] = useState("");

//   function handleChangeFirst(e) {
//     setFirstName(e.target.value);
//   }
//   function handleChangeLast(e) {
//     setLastName(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(firstName, lastName);
//   }

//   return (
//     <div>
//       <h1>Form Component</h1>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">
//           {" "}
//           First Name :
//           <input type="text" value={firstName} onChange={handleChangeFirst} />
//         </label>
//         <label htmlFor="">
//           {" "}
//           Last Name :
//           <input type="text" value={lastName} onChange={handleChangeLast} />
//         </label>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  function handleChangeFirst(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLast(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = { firstName, lastName };
    setSubmittedData([...submittedData, newData]);
    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name:
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleChangeFirst}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleChangeLast}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
