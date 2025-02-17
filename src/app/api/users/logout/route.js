// This function handles HTTP GET requests to the API route.
import { NextRequest, NextResponse } from "next/server";


export async function GET(request) {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "",
        { httpOnly: true, expires: new Date(0)
        })

        return response;
        
    } catch (error) {
        return NextResponse.json({ error: error.message},
            {status: 500});
    }
    
}