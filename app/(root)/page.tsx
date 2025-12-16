import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTE } from "@/constants/route";

export default async function Home() {
    const session = await auth();
    return (
        <div className="">
            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: ROUTE.SIGN_IN });
                }}
            >
                <p>{session?.user?.name}</p>
                <Button type="submit">SignOut</Button>
            </form>
        </div>
    );
}
