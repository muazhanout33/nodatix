interface N8nPayload {
  name: string;
  email: string;
  message?: string;
  source: "website";
}

export async function sendToN8n(data: N8nPayload) {
  const response = await fetch("https://app.newjourneyn8n.cfd/webhook/lead-capture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send data to n8n");
  }

  return response.json();
}