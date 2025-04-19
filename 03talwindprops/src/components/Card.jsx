import React from "react";
function Card({ username, btnText = "visit me" }) {
    // console.log("props", props.username)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="data:image/jpeg;base64,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" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset {username}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography {btnText}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}
export default Card 