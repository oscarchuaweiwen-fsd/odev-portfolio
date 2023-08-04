import { SignJWT, jwtVerify } from "jose";

const secret = process.env.NEXT_PUBLIC_JWT_SECRET as string;
const signJWTTokens = async () => {
    try {
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 60; // one hour

        const data = await new SignJWT({ msg: "" })
            .setProtectedHeader({ alg: "HS512", typ: "JWT" })
            .setExpirationTime(exp)
            .setIssuedAt(iat)
            .setNotBefore(iat)
            .sign(new TextEncoder().encode(secret));

        return data.toString();
    } catch (error) {
        console.log(error);
    }
};

const verifyJWTTokens = async (token: string) => {
    try {
        const { payload } = await jwtVerify(
            token,
            new TextEncoder().encode(secret),
        );
        // run some checks on the returned payload, perhaps you expect some specific values

        // if its all good, return it, or perhaps just return a boolean
        return true;
    } catch (err) {
        // err
        return false;
    }
};

export { signJWTTokens, verifyJWTTokens };
