import { NextResponse } from "next/server";

const customers: any = {};

export async function GET() {
  return NextResponse.json(customers);
}

// POST /api/customers
export async function POST(request: Request) {
  const {
    id,
    name,
    address,
    phone,
    email,
    type,
    comment,
    createdAt,
    updatedAt,
  } = await request.json();

  customers[id] = {
    name,
    address,
    phone,
    email,
    type,
    comment,
    createdAt,
    updatedAt,
  };

  return NextResponse.json(customers);
}
