import React from "react";

const UserInput = ({setCardData}) => {
  function submitHandle(e) {
    e.preventDefault();
    const [name, description, intrests, linkedIn, twitter, instagram] =
      e.target;
    // name.value,description.value,intrests.value.split(','),linkedIn.value,twitter.value,instagram.value

    fetch("http://localhost:4000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:name.value,
        description:description.value,
        intrests:intrests.value.split(','),
        linkedIn:linkedIn.value,
        twitter:twitter.value,
        instagram:instagram.value,
      }),
    }).then(res=>res.json()).then((data)=>{
      console.log(data);
      setCardData((prev)=> [...prev, data])
    });
  }
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <label htmlFor="description">Description:</label>
      <textarea name="description" />
      <label htmlFor="intrests">Intrests</label>
      <input
        type="text"
        placeholder="Please enter comma after each intrests"
        name="intrests"
      />
      <label htmlFor="linkedIn">LinkedIn link:</label>
      <input type="text" name="linkedIn" />
      <label htmlFor="twitter">Twitter link:</label>
      <input type="text" name="twitter" />
      <label htmlFor="Instagram">Instagram link:</label>
      <input type="text" name="instagram" />
      <button>Submit</button>
    </form>
  );
};

export default UserInput;
