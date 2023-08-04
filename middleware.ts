import { verifyJWTTokens } from "@/libs/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let authToken = request!.headers!.get("authorization");

    if (authToken) {
        authToken = authToken.split(" ")[1];
    } else {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "authentication failed",
            }),
            { status: 401, headers: { "content-type": "application/json" } },
        );
    }

    const result = await verifyJWTTokens(authToken);

    if (!result) {
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "authentication failed",
            }),
            { status: 401, headers: { "content-type": "application/json" } },
        );
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/api/contact",
};
