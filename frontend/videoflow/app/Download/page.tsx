import DownloadIcon from "../components/UI/icons/Download-icon";
import Link from "next/link";

export default function Download() {
    return (
        <section className="mx-auto mt-15 flex flex-col items-center gap-10 lg:h-[522px] lg:w-[920px] lg:flex-row lg:justify-between">
            {/*Corregir**/}
            <div className="h-[300px] w-full max-w-[325px] border lg:mt-13 lg:h-[472px] lg:w-[325px]">
                <p>video</p>
            </div>

            
            <div className="flex w-full max-w-[419px] flex-col lg:h-[427px] lg:w-[419px]">
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
                <div className="mt-7 flex w-full flex-col gap-2 rounded-[15px] bg-[#F2F2F7] p-[25px] lg:h-[183px] lg:w-[419px]">
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

                
                <div className="mt-8 w-full lg:h-[120px] lg:w-[419px]">
                    <button className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-[#2F27CE] px-[24px] py-[12px] text-[#FAFAFA]">
                        <DownloadIcon />
                        Descargar
                    </button>

                    <Link
                        href="/upload-file"
                        className="mt-4 flex h-[50px] w-full items-center justify-center rounded-[12px] bg-[#F2F2F7] px-[20px] py-[10px] text-center text-[#000000]"
                    >
                        Crear otro corto
                    </Link>
                </div>
            </div>
        </section>
    );
}
