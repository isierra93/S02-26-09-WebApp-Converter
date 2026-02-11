import { Clock, Send, Zap } from "lucide-react";
export default function Card() {
    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-700 delay-300 hover:translate-y-2 hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]">
                    <div className="mx-auto w-20 h-20 rounded-full bg-[#A5A0FF] flex items-center justify-center">
                        <Zap className="w-10 h-10 text-white" />
                        
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

                <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-600 delay-300 hover:translate-y-2 hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]">
                    <div className="mx-auto w-20 h-20 rounded-full bg-[#E8E7FF] flex items-center justify-center">
                        <Clock className="w-10 h-10 text-[#5C4CE8]" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Ahorra tiempo
                    </h3>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Concentrate en tu negocio mientras
                        nosotros nos encargamos de la
                        conversión de video.
                    </p>
                </article>

                <article className="bg-white rounded-3xl border border-gray-200 shadow-sm p-10 text-center transition-all duration-700 delay-300 hover:translate-y-2  hover:shadow-[0_4px_6px_-2px_rgba(92,66,184,0.5)] hover:bg-[#DEDCFF]">
                    <div className="mx-auto w-20 h-20 rounded-full bg-[#E8E7FF] flex items-center justify-center">
                        <Send className="w-10 h-10 text-[#5C4CE8]" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Listo para publicar
                    </h3>
                    <p className="mt-4 text-base text-gray-700 leading-relaxed">
                        Exportá en el formato perfecto para
                        todas las principales plataformas
                        sociales.
                    </p>
                </article>
            </div>
        </section>
    );
}
