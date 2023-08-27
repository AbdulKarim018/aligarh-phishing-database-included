import Data from "@/utils/models/Data";
import { connectToDB } from '@/utils/index';
import { NextResponse } from "next/server";



export async function handler(req) {
    try {
        const body = await req.json()
        const { username, password } = await body

        if (!username && !password) {
            return NextResponse.json({ msg: "Missing Credentials!" }, { status: 400 });
        } else {
            await connectToDB()
            await Data.create({ username, password });
            console.log("Entry Created!");
        }
        return NextResponse.json({ msg: "Success!" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: "something bad happened" }, { status: 500 })
    };
}

export { handler as POST }