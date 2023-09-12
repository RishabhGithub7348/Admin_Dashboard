import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: User = await request.json();
    const product = await prisma.user.update({
        where:{
            id: Number(params.id)
        },
        data:{
            name: body.name,
            email: body.email,
            password: body.password
        }
    });
    return NextResponse.json(product, {status: 200});
}

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    const product = await prisma.user.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(product, {status: 200});
}
