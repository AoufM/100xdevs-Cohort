import React from "react";

const BusinessCard = ({
  name,
  description,
  id,
  intrests,
  linkedIn,
  twitter,
  instagram,
  setCardData,
  cardData,
  setReload,
}) => {
  function deleteCard(id) {
    fetch("http://localhost:4000/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.msg);
        setCardData((prev) => prev.filter((card) => card.id !== id));
      });
  }

  function editCard(
    id,
    name,
    description,
    intrests,
    twitter,
    instagram,
    linkedIn
  ) {
    const newname = prompt(`Change name from ${name} to:`);
    const newdescription = prompt(`Change description from ${description} to:`);
    const newintrests = prompt(
      `Change intrests from ${intrests.join(",")} to:`
    );
    const newtwitter = prompt(`Change twitter link from ${twitter} to:`);
    const newinstagram = prompt(`Change instagram link from ${instagram} to:`);
    const newlinkedIn = prompt(`Change linkedIn link from ${linkedIn} to:`);
    console.log(
      newname,
      newdescription,
      newintrests.split(","),
      newtwitter,
      newinstagram,
      newlinkedIn
    );
    fetch("http://localhost:4000/put", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        name: newname,
        description: newdescription,
        intrests: newintrests.split(","),
        linkedIn: newlinkedIn,
        twitter: newtwitter,
        instagram: newinstagram,
      }),
    })
      .then((res) => res.json())
      // .then((data) =>
			// 	setCardData((prev) =>
			// 		prev?.map((card) =>
			// 			card.id == id ? data.updatedCard : card
			// 		)
			// 	)
			// );
      .then((data) => {
        console.log(data);
        console.log(cardData);
        window.location.reload();
      });
  }

  return (
    <>
      <div className="business-card">
        <div className="name">
          <h1> {name}</h1>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="intrests">
          <h3>Intrests</h3>
          <ul className="intrests-list">
            {intrests?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="socials">
          <a href={linkedIn}>LinkedIn</a>
          <a href={twitter}>Twitter</a>
          <a href={instagram}>Instagram</a>
        </div>
        <div>
          <button
            onClick={() =>
              editCard(
                id,
                name,
                description,
                intrests,
                twitter,
                instagram,
                linkedIn
              )
            }
          >
            Edit
          </button>
          <button onClick={() => deleteCard(id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
