import { ChangeEvent, FormEvent, useState } from "react";

import useActions from "../hooks/useActions";
import useTypedSelector from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const { data, loading, error } = useTypedSelector(
    (store) => store.repositories
  );

  const { searchRepositories } = useActions();

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const goSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(search);
  };

  return (
    <div>
      <form onSubmit={goSearch}>
        <input onChange={onChange} value={search} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data &&
        data.map((pckg) => <div key={pckg}>{pckg}</div>)}
    </div>
  );
};

export default RepositoriesList;
