import { Upload } from "lucide-react";
import Image from "next/image";

export default function BottomSection() {
    return (
        <section className="bg-[#DEDCFF] mt-12 mb-16">
            <div className="px-4 sm:px-8 md:px-16 lg:px-24 p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="ml-0 sm:ml-4 md:ml-8 lg:ml-40">
                    <h2 className="text-[41px] sm:text-5xl md:text-6xl font-bold text-black leading-tight">
                        Listo para crear tu primer short?
                    </h2>
                    <p className="mt-6 text-base sm:text-[33px] text-gray-700">
                        Subí tu video y empezá a reutilizar
                        tu contenido en minutos.
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 cursor-pointer bg-[#433BFF] text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-blue-800 transition-all">
                        <Upload className="w-5 h-5" />
                        Subir video
                    </button>
                </div>
                <div className="relative mr-0 sm:mr-4 md:mr-8 lg:mr-40">
                    <Image
                        src="/short.jpg"
                        alt="Vista previa de video"
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
