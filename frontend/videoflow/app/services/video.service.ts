export async function uploadVideo(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        "http://localhost:8080/api/conversions/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error al subir el video");
    }

    return response.json();
}
