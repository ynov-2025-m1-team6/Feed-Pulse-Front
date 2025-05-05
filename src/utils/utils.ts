export const fetchApi = async (
  endpoint: string,
  method: string,
  body: object,
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("baseUrl", baseUrl);
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json", // Indique que la charge utile est au format JSON
      },
      body: JSON.stringify(body),
    });
    console.log("response", response);

    const data = await response.json();
    console.log("data", data);
    return { data, response };
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};
