import { Clock, Send } from "lucide-react";
export default function Card() {
    return (
        <section className="mx-[50px] md:mx-[100px] lg:mx-[187px] xl:mx-[350px] mt-[60px] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[37px] md:gap-[37px] lg:gap-[80px] xl:gap-[150px]  max-w-7xl mx-auto">
                
                <article className="group bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-700 delay-300 hover:translate-y-2 hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]  ">
                    
                    <div className="mx-auto w-22 h-22 rounded-full bg-[#E7ECFC] group-hover:bg-[#5e58d4] flex items-center justify-center transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]">

                        <div className="w-16 h-16 rounded-full bg-[#CDD8FB] group-hover:bg-white transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]  flex items-center justify-center">
                            <img src="/iconcard1.svg" alt="" className="w-[36px] h-[36px]" />
                        </div>
                        
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Rápido
                    </h3>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Convertí videos en segundos, no en
                        horas. Sin necesidad de edición
                        compleja.
                    </p>
                </article>

                <article className="group bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-700 delay-300 hover:translate-y-2 hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]">
                    
                    <div className="mx-auto w-22 h-22 rounded-full bg-[#E7ECFC] group-hover:bg-[#5e58d4] flex items-center justify-center transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]">

                        <div className="w-16 h-16 rounded-full bg-[#CDD8FB] group-hover:bg-white transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]  flex items-center justify-center">
                            <img src="/iconcard2.svg" alt="" className="w-[36px] h-[36px]" />
                        </div>
                        
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Ahorra tiempo
                    </h3>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Concentrate en tu negocio mientras
                        nostros nos encargamos de la conversión
                        de tus videos.
                    </p>
                </article>

                <article className="group bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-700 delay-300 hover:translate-y-2 hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]">
                    
                    <div className="mx-auto w-22 h-22 rounded-full bg-[#E7ECFC] group-hover:bg-[#5e58d4] flex items-center justify-center transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]">

                        <div className="w-16 h-16 rounded-full bg-[#CDD8FB] group-hover:bg-white transition-all duration-700 delay-300 shadow-[0_6px_14px_rgba(165,160,255,0.35)]  flex items-center justify-center">
                            <img src="/iconcard3.svg" alt="" className="w-[36px] h-[36px]" />
                        </div>
                        
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Listo para publicar
                    </h3>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Exportá tus videos en formato perfecto
                        para todas las princiopales plataformas de redes sociales.
                    </p>
                </article>

            </div>
        </section>
    );
}
