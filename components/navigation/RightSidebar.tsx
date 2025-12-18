import React from "react";

const RightSidebar = () => {
    return (
        <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-1 p-6 pt-36 max-lg:hidden dark:shadow-none">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
            </div>
        </section>
    );
};

export default RightSidebar;
