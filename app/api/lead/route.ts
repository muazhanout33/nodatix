export async function POST(req: Request) {
  const body = await req.json();

  await fetch("https://app.newjourneyn8n.cfd/webhook-test/lead-capture", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return Response.json({ success: true });
}
