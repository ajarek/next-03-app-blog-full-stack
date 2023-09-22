import { NextResponse } from "next/server";
//2:04:18
export const GET = async (request) => {

return new NextResponse('działa kot', { status: 200 });
}