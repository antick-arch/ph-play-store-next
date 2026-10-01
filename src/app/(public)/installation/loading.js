import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div
            aria-label="Loading app details"
            className="flex min-h-[70vh] items-center justify-center"
            role="status"
        >
            <HashLoader color="#2563eb" size={64} />
        </div>
    );
};

export default Loading;