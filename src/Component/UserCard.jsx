import React from "react";
import "../App.css";

function UserCard({ user }) {
  const { name, location, picture } = user;
  return (
    <div className="user-card">
      <img src={picture.large} alt={name.first} />
      <h2>
        My Name is {name.first} {name.last}
      </h2>
      <p> I live in {location.country}</p>
      <p>
        {location.street.name}, {location.street.number}
      </p>
    </div>
  );
}

export default UserCard;
