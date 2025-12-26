import React from "react";

const QuestionDetails = async ({ params }: RouteParams) => {
    const { id } = await params;

    return <div>QuestionDetails {id.toString()}</div>;
};

export default QuestionDetails;
