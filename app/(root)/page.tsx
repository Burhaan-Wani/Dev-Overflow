import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/route";

export default async function Home() {
    const session = await auth();
    return (
        <div className="">
            <form
                className="pt-[100px]"
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: ROUTES.SIGN_IN });
                }}
            >
                <p>{session?.user?.name}</p>
                <Button type="submit">SignOut</Button>
            </form>
        </div>
    );
}
