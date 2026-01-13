import QuestionCard from "@/components/cards/QuestionCard";
import DataRenderer from "@/components/DataRenderer";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import { EMPTY_QUESTION } from "@/constants/states";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

interface RouteParams {
    Params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
}
export default async function Home({ searchParams }: RouteParams) {
    const { page, pageSize, query, filter } = await searchParams;

    const { success, data, error } = await getQuestions({
        page: Number(page) || 1,
        pageSize: Number(pageSize) || 10,
        query,
        filter,
    });
    const { questions, isNext } = data || {};
    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button
                    className="primary-gradient text-light-900! min-h-[46px] px-4 py-3"
                    asChild
                >
                    <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                </Button>
            </section>
            <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearch
                    route={ROUTES.HOME}
                    otherClasses="flex-1"
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                />
            </section>
            <HomeFilter />
            <DataRenderer
                success={success}
                error={error}
                data={questions}
                empty={EMPTY_QUESTION}
                render={(questions) => (
                    <div className="mt-10 flex w-full flex-col gap-6">
                        {questions.map((question) => (
                            <QuestionCard
                                key={question._id}
                                question={question}
                            />
                        ))}
                    </div>
                )}
            />
        </>
    );
}
