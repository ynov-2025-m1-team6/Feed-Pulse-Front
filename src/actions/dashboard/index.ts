"use server";

import { fetchApi } from "@/utils/utils";
import { cookies } from "next/headers";

export async function addFile(prevState, formData: FormData) {
  const file = formData.get("file") as File;

  if (!file || !(file instanceof Blob)) {
    return {
      message: "Aucun fichier valide",
      success: false,
      errors: { file: "Fichier invalide" },
    };
  }

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("file", file);

    const cookieStore = await cookies();
    const token = await cookieStore.get("jwt");

    await fetchApi(
      "api/feedbacks/upload",
      "POST",
      token?.value,
      formDataToSend,
    );

    return {
      message: "Fichier envoyé avec succès",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    return {
      message: "Erreur lors de l'envoi",
      success: false,
      errors: { file: "Impossible d'envoyer le fichier" },
    };
  }
}

export async function getMetrics() {
  try {
    const cookieStore = await cookies();
    const token = await cookieStore.get("jwt");

    const result = await fetchApi("api/board/metrics", "GET", token?.value);
    // console.log("result", result);

    return result.data;
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
  }
}
