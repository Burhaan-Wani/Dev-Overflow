import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/route";
import Link from "next/link";

interface RouteParams {
    Params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
}
export default async function Home({ searchParams }: RouteParams) {
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
            <section className="ga-5 mt-11 flex justify-between max-sm:flex-col sm:items-center">
                <LocalSearch
                    route={ROUTES.HOME}
                    otherClasses="flex-1"
                    imgSrc="/icons/search.svg"
                    placeholder="Search questions..."
                />
                Common Filter
            </section>
        </>
    );
}
