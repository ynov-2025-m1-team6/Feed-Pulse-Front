export const fetchApi = async (
  endpoint: string,
  method: string,
  token?: string,
  body?: object | FormData,
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("baseUrl", baseUrl);

  const isFormData = body instanceof FormData;

  const headers: HeadersInit = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: Object.keys(headers).length ? headers : undefined,
      body: isFormData ? body : JSON.stringify(body),
    });

    const data = await response.json();
    return { data, response };
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};
