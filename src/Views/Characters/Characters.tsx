import React from "react";

import CharacterForm from "./CharacterForm";
import CharacterTable from "./CharacterTable";
import './Characters.css';

function Characters(): JSX.Element {
  return (
  <>
    <CharacterForm />
    <CharacterTable />
  </>);
}

export default Characters;
