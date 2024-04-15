export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  return new Response("This is a new API route");
}
