import React, { Suspense, useContext } from "react";
import { CharactersContext } from "src/context/CharactersContext";
import Dialog from "src/components/Dialog/Dialog";
import AlertIcon from "src/assets/icons/alert";
import Loader from "src/components/Loader/Loader";
import Pagination from "src/components/Pagination/Pagination";

export default function Table() {
  const { handleSearchChange, response, characters, isOpened, setIsOpened } =
    useContext(CharactersContext);

  function handleCloseDialog() {
    setIsOpened(false);
    handleSearchChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  }

  return (
    <div className="flex flex-col mt-5 h-fit">
      {!response.count && isOpened && (
        <Dialog onClose={handleCloseDialog}>
          <div className="flex items-center justify-center gap-7">
            <AlertIcon className="h-10 w-10 text-yellow-500" />
            <p className="text-center text-black">
              No characters with that name
            </p>
          </div>
        </Dialog>
      )}
      <div className="flex-grow">
        <div className="flex justify-center gap-7 my-10 mx-10  w-screen">
          <table className="table-auto w-full">
            <thead className="text-left text-green-500">
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Skin color</th>
                <th>Eye color</th>
                <th>Hair color</th>
              </tr>
            </thead>

            <tbody>
              <Suspense fallback={<Loader />}>
                {characters?.map((character) => (
                  <tr key={character.name} className="hover:bg-slate-600">
                    <td>{character.name || "Not informed"}</td>
                    <td>{character.birth_year || "Not informed"}</td>
                    <td>{character.gender || "Not informed"}</td>
                    <td>{character.height || "Not informed"}</td>
                    <td>{character.mass || "Not informed"}</td>
                    <td>{character.skin_color || "Not informed"}</td>
                    <td>{character.eye_color || "Not informed"}</td>
                    <td>{character.hair_color || "Not informed"}</td>
                  </tr>
                ))}
              </Suspense>
            </tbody>
          </table>
        </div>
      </div>
      <footer className="mt-auto bg-gray-200 p-4 bottom-0 inset-x-0 fixed">
        <Pagination />
      </footer>
    </div>
  );
}
