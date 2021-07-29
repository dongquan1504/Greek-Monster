export default function SearchBox({searchChange}) {
  return (
    <div className="pa2">
      <label htmlFor="search">Searching: </label>
      <input
        className="pa3 b--green bg-lightest-blue"
        type="search"
        placeholder="searchMonster"
        onChange={searchChange}
      />
    </div>
  );
}
