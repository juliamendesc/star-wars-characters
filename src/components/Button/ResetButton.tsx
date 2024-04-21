import React, { useContext } from 'react';
import { CharactersContext } from 'src/context/CharactersContext';
import Button from 'src/components/Button/Button';

export default function ResetButton() {
  const { resetTable } = useContext(CharactersContext);

  return (
    <Button
      onClick={resetTable}
      ariaLabel="Reset table button"
      className="my-10 absolute top-0 p-4 mx-10 bg-slate-700 rounded-md "
    >
      Reset Table
    </Button>
  );
}
