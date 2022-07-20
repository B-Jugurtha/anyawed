export interface ISearchResult {
  sampleTextProp: string;
}

const SearchResult: React.FC<ISearchResult> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default SearchResult;
