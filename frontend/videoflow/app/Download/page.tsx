"use client";
import DownloadIcon from "../components/UI/icons/Download-icon";
import Link from "next/link";

type Props = {
    videoUrl: string;
};

export default function Download({ videoUrl }: Props) {
    const handleDownload = async () => {
        try {
            const response = await fetch(videoUrl);
            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "mi-corto-vertical.mp4";
            document.body.appendChild(a);
            a.click();

            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error descargando el video:", error);
        }
    };
    return (
        <section className="mx-auto mt-15 flex flex-col items-center gap-10 lg:h-130.5 lg:w-230 lg:flex-row lg:justify-between">
            {/*Corregir**/}
            <div className="h-75 w-full max-w-81.25 border lg:mt-13 lg:h-118 lg:w-81.25">
                <video
                    src={videoUrl}
                    controls
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex w-full max-w-104.75 flex-col lg:h-106.75 lg:w-104.75">
                <div className="gap-6">
                    <p className="text-[21px] font-medium text-[#050315]">
                        Tu corto ya está listo
                    </p>

                    <p className="font-inter text-[14px] leading-[130%] font-normal text-[#505050]">
                        Descargá tu video vertical optimizado para plataformas
                        de redes sociales.
                    </p>
                </div>

                {/*Info*/}
                <div className="mt-7 flex w-full flex-col gap-2 rounded-[15px] bg-[#F2F2F7] p-6.25 lg:h-45.75 lg:w-104.75">
                    <div className="flex justify-between">
                        <p className="text-[#505050]">Duración</p>
                        <p className="text-[#000000]">00.00</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[#505050]">Formato</p>
                        <p className="text-[#000000]">mp4</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[#505050]">Calidad</p>
                        <p className="text-[#000000]">1080p</p>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[#505050]">Plataformas</p>
                        <p className="text-[#000000]">TikTok, Reels, Shorts</p>
                    </div>
                </div>

                <div className="mt-8 w-full lg:h-30 lg:w-104.75">
                    <button
                        onClick={handleDownload}
                        className="flex h-12.5 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#2F27CE] px-6 py-3 text-[#FAFAFA]"
                    >
                        <DownloadIcon />
                        Descargar
                    </button>

                    <Link
                        href="/upload-file"
                        className="mt-4 flex h-12.5 w-full items-center justify-center rounded-xl bg-[#F2F2F7] px-5 py-2.5 text-center text-[#000000]"
                    >
                        Crear otro corto
                    </Link>
                </div>
            </div>
        </section>
    );
}
