import { useRef } from "react";

export default function CatFriends() {
  const itemsRef = useRef(null);

  function scrollToId(itemId) {
    const map = getMap();
    const node = map.get(itemId);

    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav className="text-center py-4 bg-gray-100 sticky top-0 z-10 shadow-md">
        <button
          className="mx-1 py-2 px-4  text-orange-500 font-bold rounded-2xl bg-blue-600 "
          onClick={() => scrollToId(2)}
        >
          Tom
        </button>
        <button
          className="mx-1 py-2 px-4  text-orange-500 font-bold rounded-2xl bg-blue-600"
          onClick={() => scrollToId(5)}
        >
          Maru
        </button>
        <button
          className="mx-1 py-2 px-4  text-orange-500 font-bold  rounded-2xl bg-blue-600"
          onClick={() => scrollToId(10)}
        >
          Jellylorum
        </button>
      </nav>

      <div className="w-full overflow-x-scroll whitespace-nowrap p-4">
        <ul className="list-none p-0 flex">
          {catList.map((cat) => (
            <li
              key={cat.id}
              className="inline-block p-2 flex-shrink-0"
              ref={(node) => {
                const map = getMap();

                if (node) {
                  console.log("Creating..");
                  map.set(cat.id, node);
                } else {
                  console.log("Deleting..");
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={"Cat #" + cat.id}
                className="block rounded-lg shadow-lg"
                style={{ width: "250px", height: "200px" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

 const catList = [];
for (let i = 1; i < 12; i++) {
  catList.push({
    id: i,

    imageUrl: "https://placedog.net/250/200?id=" + i,
  });
}
