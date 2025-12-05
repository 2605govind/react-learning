// NextRequest NextResponse

import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    return NextResponse.json({
        name: 'govind',
        age:21,
    })
}

// export async function GET(request:NextRequest) {
//     const id = request.nextUrl.searchParams.get('id');
//     console.log(id)

//     return NextResponse.json({
//         userid: id,
//         message:"success query"
//     })
// }


export async function POST(request:NextRequest) {
    let {name , age} = await request.json();

    return NextResponse.json({
        bio: `My name is ${name} and my age is ${age}`
    })
}