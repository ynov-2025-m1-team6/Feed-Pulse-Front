import * as Sentry from "@sentry/nextjs";

export const fetchApi = async (
  endpoint: string,
  method: string,
  token?: string,
  body?: object | FormData,
) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const isFormData = body instanceof FormData;

  const headers: HeadersInit = {};

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return await Sentry.startSpan(
    {
      name: `Fetch ${method} ${endpoint}`,
      op: "http.client",
    },
    async () => {
      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          method,
          headers: Object.keys(headers).length ? headers : undefined,
          body: isFormData ? body : JSON.stringify(body),
        });

        let data;
        try {
          data = await response.json();
        } catch {
          data = null;
        }

        if (!response.ok) {
          // Ajoute du contexte Sentry pour les erreurs d’API (non-2xx)
          Sentry.setContext("fetchApi", {
            endpoint,
            method,
            status: response.status,
            body: isFormData ? "FormData" : body,
          });

          const error = new Error(
            `API error: ${response.status} ${response.statusText}`
          );
          Sentry.captureException(error);
          throw error;
        }

        return { data, response };
      } catch (error) {
        // Capture toute autre erreur (réseau, parsing, etc.)
        Sentry.setContext("fetchApi", {
          endpoint,
          method,
          token: token ? "provided" : "none",
          isFormData,
        });

        Sentry.captureException(error);
        throw error;
      }
    }
  );
};
