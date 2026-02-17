export default function AppInstructions() {
    return (
        <section className="mt-[90px] mb-[77px] mb-24 mx-[50px] md:mx-[100px] lg:mx-[187px] xl:mx-[350px]">
            <div className="bg-[#433BFF] rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-white  ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                    ¿Cómo funciona?
                </h2>
                <div className="mt-8 space-y-8">
                    <div className="flex items-start gap-6">
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F27CE] text-white text-xl font-bold shrink-0">
                            1
                        </span>
                        <div>
                            <h4 className="text-xl font-bold mb-2">
                                Subí tu video
                            </h4>
                            <p className="text-base text-white/90 leading-relaxed">
                                Hacé clic para explorarlo
                                desde tu computadora. Una
                                vez cargado, vas a poder
                                visualizarlo directamente en
                                la plataforma.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F27CE] text-white text-xl font-bold shrink-0">
                            2
                        </span>
                        <div>
                            <h4 className="text-xl font-bold mb-2">
                                Seleccioná el fragmento
                            </h4>
                            <p className="text-base text-white/90 leading-relaxed">
                                Elegí el inicio y el final
                                del fragmento que querés
                                convertir en short. Podés
                                previsualizar el contenido
                                mientras ajustás el recorte
                                para asegurarte de que el
                                resultado sea exactamente el
                                que necesitás.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F27CE] text-white text-xl font-bold shrink-0">
                            3
                        </span>
                        <div>
                            <h4 className="text-xl font-bold mb-2">
                                Generá el short
                            </h4>
                            <p className="text-base text-white/90 leading-relaxed">
                                Con el fragmento
                                seleccionado, generá tu
                                short automáticamente. El
                                sistema adapta el video a un
                                formato optimizado para
                                redes sociales, manteniendo
                                una buena calidad visual.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2F27CE] text-white text-xl font-bold shrink-0">
                            4
                        </span>
                        <div>
                            <h4 className="text-xl font-bold mb-2">
                                Descargá el resultado
                            </h4>
                            <p className="text-base text-white/90 leading-relaxed">
                                Previsualizá el short final
                                y descargalo en HD y sin
                                marca de agua. El archivo
                                queda listo para publicar o
                                reutilizar cuando lo
                                necesites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}