import  { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";
// import CardComponent from "../components/CardComponent1";
import axios from "axios";
import CardComponent1 from "../components/CardComponent1";
import CardComponent2 from "../components/CardComponent2";

const Home = () => {
  const [randomPhoto, setRandomPhoto] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
//   const clientId = process.env.REACT_APP_UNSPLASH_API_KEY;
  

  const handleSearchQueryChange = (e) => {
    console.log(searchQuery);
    setSearchQuery(e.target.value);
  };

  const getRandomPhoto = async () => {
    try {
      const res = await axios.get(
        'https://api.unsplash.com/photos/random?client_id=kUZDHVQeOQENYKbF5HFRHbEX3vpUNXR_d-AZEInYCSU&count=30'
      );
      setRandomPhoto(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(`Error fetching data: ${err}`);
    }
  };

  const performSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&client_id=kUZDHVQeOQENYKbF5HFRHbEX3vpUNXR_d-AZEInYCSU&query=${searchQuery}`
      );
      setSearchResults(res.data.results);
      console.log(searchResults);
    } catch (err) {
      console.log(`Error performing the search: ${err}`);
    }
  };

  useEffect(() => {
    getRandomPhoto();
  }, []);

  return (
    <div className="w-full min-h-screen px-8 block bg-gradient mx-auto">
      {/* Navbar component */}
      <Navbar />
      <div className="w-[90%] pt-28 relative flex mx-auto flex-col justify-center items-center">
        <div>
          <SearchComponent
            searchQuery={searchQuery}
            onSearchQueryChange={handleSearchQueryChange}
            performSearch={performSearch}
          />
        </div>
        <div className="w-full flex justify-center items-center mt-20">
          {searchQuery ? (
            <CardComponent1 searchResults={searchResults} />
          ) : (
            <CardComponent2 randomPhoto={randomPhoto} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
