import React from 'react'; // Assuming you're using React
import Container from './Container';
import { PrismaClient } from "@prisma/client";
import { CustomSession, authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function Page(){
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ status: 401, message: "Un-Authorized" });
    }
  
  
    const res = await prisma.user.findMany({
        where: {
            NOT: {
              id: Number(session.user?.id),
            },
          },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
        },
      });
    
    
  
    return (
      <Container users={res} />
    );
  };
  
  export default Page;
  