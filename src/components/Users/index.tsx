import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.css";

const Users: FunctionComponent = () => {
  const mockedUsers = [
    {
      id: 1,
      nome: "Igor",
    },
    {
      id: 2,
      nome: "Carol",
    },
    {
      id: 3,
      nome: "Teste",
    },
  ];

  return (
    <>
      {mockedUsers.map((user) => (
        <p>{`ID - ${user?.id} Nome - ${user?.nome}`}</p>
      ))}
    </>
  );
};

export default Users;
