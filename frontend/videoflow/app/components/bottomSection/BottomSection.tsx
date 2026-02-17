import { Upload } from "lucide-react";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function BottomSection() {
    return (
        <section className="bg-[#DEDCFF] mt-[80px] mb-[80px]">
            {/* Layout móvil: < 768px */}
            <div className="mx-[50px] md:mx-[100px] lg:mx-[187px] xl:mx-[350px] md:hidden sm:px-6 py-[60px] md:py-[80px] sm:py-8 space-y-4  sm:space-y-4  md:max-w-125.5 lg:max-w-125.5 xl:max-w-125.5 2xl:max-w-125.5 ">
                <h2 className="flex md:justify-center justify-start mx-12.5 text-xl sm:text-2xl font-bold text-black leading-tight ">
                    Listo para crear tu primer short?
                </h2>
                <p className="flex md:justify-center justify-start mx-12.5 text-sm sm:text-base text-gray-700 leading-relaxed ">
                    Subí tu video y empezá a reutilizar tu
                    contenido en minutos.
                </p>
                    <div className="flex md:justify-center justify-start  mx-12.5">
                    <Image
                        src="/short.jpg"
                        alt="Vista previa de video"
                        width={502}
                        height={502}
                        className="h-auto rounded-2xl shadow-lg object-cover "
                    />
                </div>
                <div className="flex justify-start py-2  mx-12.5">
                    <button className="inline-flex items-center gap-2 cursor-pointer bg-[#433BFF] text-white  px-6 py-3 rounded-xl text-base font-semibold hover:bg-blue-800 transition-all">
                        <Upload className="w-5 h-5" />
                        Subir video
                    </button>
                </div>
            </div>

            {/* Layout tablet/desktop: >= 768px */}
            <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center mx-[50px] md:mx-[100px] lg:mx-[187px] xl:mx-[350px]  lg:px-[80px] xl:px-[80px] 2xl:px-32 py-8 md:py-10 lg:py-12">
                <div className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-black leading-tight">
                        Listo para crear tu primer short?
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed">
                        Subí tu video y empezá a reutilizar
                        tu contenido en minutos.
                    </p>
                    <PrimaryButton />
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/short.jpg"
                        alt="Vista previa de video"
                        width={502}
                        height={502}
                        className="w-full max-w-125.5 md:max-w-125.5 lg:max-w-125.5 xl:max-w-125.5 2xl:max-w-125.5 h-auto rounded-2xl shadow-lg object-cover"
                    />
                </div>
            </div>
            
            
        </section>
    );
}
