export async function GET(
  request: Request,
  { params }: { params: { user: string } }
) {
  return new Response(`Welcome to my Next application, user: ${params.user}`);
}
