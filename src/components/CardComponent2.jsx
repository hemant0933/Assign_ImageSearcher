import React, { useRef, useState } from "react";
import { LikeIcon } from "../constants/Icons";
import { FadeLoader } from "react-spinners";

const CardComponent2 = ({ randomPhoto }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dialogRef = useRef();

  const openModal = (item) => {
    setSelectedItem(item);
    dialogRef.current.showModal();
  };

  const handleClose = () => {
    dialogRef.current.close();
  };

  return (
   <>
    <div id="card2wrapper" className="flex flex-wrap flex-row items-center justify-center gap-4 btn">
      {Array.isArray(randomPhoto) ? (
        randomPhoto &&
        randomPhoto.map((item,index) => (
          <div
            key={item.id || index} 
            className="w-[400px] h-[300px] relative card2
             flex flex-col justify-center items-center
             cursor-pointer rounded-lg hover:scale-105 transition-all duration-500"
             onClick={() => openModal(item)}
          >
            <img
              src={item.urls.regular}
              className="w-[90%] h-[80%] rounded-t-lg object-cover"
              alt={item.alt_description}
            />
            <div className="flex absolute bottom-0 left-0 right-0 w-[360px] justify-between items-center py-2 px-4 mx-auto text-gray-900 bg-white">
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300">
                  <img
                    src={item.user.profile_image.medium}
                    className="rounded-full w-full h-full object-cover cursor-pointer"
                    alt="Avatar image"
                  />
                </div>
                <div className="flex flex-col w-[200px] font-semibold text-left justify-start">
                  <p className="px-2 text-sm">{item.user.name}</p>
                  <p className="px-2 text-xs text-gray-400">
                    {item.user.username || "Anonymous"}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <LikeIcon />
                <p className="font-semibold text-sm">{item.likes}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <FadeLoader color="#36d7b7" />
      )}
    </div>

     <dialog ref={dialogRef} className="modal w-[700px] modal-middle rounded-md sm:modal-middle mx-auto my-auto">
        <div className="modal-box">
          {selectedItem && (
            <>
              <img
                src={selectedItem.urls.regular}
                alt={selectedItem.alt_description}
                className="w-[900px] h-[380px] rounded-t-md object-cover"
              />
              <div className="flex items-center justify-between gap-2 px-4 py-4 bg-gray-100">
                <div className="flex">
                <img src={selectedItem.user.profile_image.medium} className="w-12 h-12 rounded-full hover:border-2 cursor-pointer  hover:border-blue-500" alt="avatar"/>
                <div className="flex flex-col justify-start items-start">
                  <h3 className="font-bold text-lg px-4 hover:text-gray-700 cursor-pointer">{selectedItem.user.name}</h3>
                  <p className="px-4 text-xs text-gray-400 italic">
                    {selectedItem.user.username || "Anonymous"}
                  </p>
                </div>
                </div>
                <div className="flex gap-2 items-center cursor-pointer hover:text-gray-700">
                  <LikeIcon/>
                  <p className="font-semibold text-xs">{selectedItem.likes}</p>
                </div>
              </div>
              <p className="py-4 px-6 text-base text-justify">{selectedItem.user.bio || "No bio available"}</p>
            </>)
          }
          <div className="modal-action">
            <form method="dialog" className="modal-backdrop">
              <button className="btn btn-sm absolute right-2 top-2 w-7 cursor-pointer rounded-full bg-slate-300 hover:bg-slate-200 text-xl" onClick={handleClose}>
                X
              </button>
            </form>
          </div>
        </div>
      </dialog>
   </>
  );
};

export default CardComponent2;
