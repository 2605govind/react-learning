import { NextRequest, NextResponse } from "next/server";

const users = [
    {
        name: 'Rajesh',
        age: 45
    },
    {
        name: 'Pankaj',
        age: 20
    }
]

interface paramsType{
    params: {
        id: number
    }
}

// export async function GET(request:NextRequest, {params}:paramsType) {
//     const {id} = await params;
//     // const { params: { id } } = await paramsObj;
//     console.log(id);
//     return NextResponse.json({
//         userid: id,
//         user: users[id],
//         message:"success"
//     })
// }


