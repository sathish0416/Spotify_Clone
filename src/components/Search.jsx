import { useState } from "react";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
import Navbar from "./Navbar";

const Search = () => {
  const [search, setSearch] = useState("");

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Search Songs</h1>
        <input
          type="text"
          placeholder="Search songs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded text-black"
        />
        <div className="flex flex-wrap gap-4">
          {filteredSongs.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search; 