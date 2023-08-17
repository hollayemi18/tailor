import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center mx-4 border-x-0  py-5">
                    <input
                        onChange={e => setText(e.target.value)}
                        className="mt-0 bg-grey-300 rounded-full border-0 shadow-lg bg-slate-100 w-full py-3 text-black mr-1 
              px-3 leading-tight"
                        type="text"
                        placeholder="Explore market....."
                    />
                    <button
                        className="flex-shrink-0 bg-emerald-900 rounded-2xl  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm 
            border-2 text-white py-1 px-2 "
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;
