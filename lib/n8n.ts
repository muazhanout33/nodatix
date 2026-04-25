interface N8nPayload {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source: "website";
}

export async function sendToN8n(data: N8nPayload) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send");
  }

  return response.json();
}