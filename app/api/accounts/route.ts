import Account from "@/database/account.model";
import dbConnect from "@/lib/db";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        const accounts = await Account.find();

        return NextResponse.json(
            { success: true, data: accounts },
            { status: 200 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}

export async function POST(request: Request) {
    const body = await request.json();

    try {
        await dbConnect();
        const validateData = AccountSchema.parse(body);

        const existingAccount = await Account.findOne({
            provider: validateData.provider,
            providerAccountId: validateData.providerAccountId,
        });

        if (existingAccount)
            throw new ForbiddenError(
                "An account with the same provider already exists",
            );

        const newAccount = await Account.create(validateData);
        return NextResponse.json(
            { success: true, data: newAccount },
            { status: 201 },
        );
    } catch (error) {
        return handleError(error, "api") as APIErrorResponse;
    }
}
