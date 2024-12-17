import { NextRequest, NextResponse } from "next/server";
import { isLoggedIn, login, logout, generatePayload } from "../../../actions/login";

export async function POST(req: NextRequest) {
  const { action, params } = await req.json();

  switch (action) {
    case "isLoggedIn":
      return NextResponse.json({ result: await isLoggedIn() });
    case "login":
      await login(params);
      return NextResponse.json({ success: true });
    case "logout":
      await logout();
      return NextResponse.json({ success: true });
    case "generatePayload":
      return NextResponse.json({ payload: await generatePayload(params) });
    default:
      return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }
}
