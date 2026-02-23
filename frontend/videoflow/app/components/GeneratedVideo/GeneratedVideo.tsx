"use client";
import { useState } from "react";
import StepIcon from "../UI/icons/StepIcon";
import Check from "../UI/icons/check";

const steps = [
    "Analizando el contenido del video",
    "Extrayendo el fragmento",
    "Conversión a formato vertical",
    "Optimizando para las redes sociales",
    "Optimizando la calidad",
    "Finalizando tu corto",
];

export default function GeneratedVideo() {
    const [progress, setProgress] = useState(0);
    const [complete, setComplete] = useState(false);

    return (
        <div className="mt-[80px] flex w-full justify-center px-[20px] sm:px-[48px] md:px-[156px] lg:px-[364px] xl:px-[364px] 2xl:px-[604px]">
            <div className="w-full rounded-2xl border-[0.25px] border-gray-300/90 bg-[#F2F2F7] text-center shadow-[0px_4px_17.6px_0px_#0000001A] sm:w-[720px] md:w-[720px]">
                <h3 className="my-8 text-center text-[21px] font-semibold text-[#000000]">
                    Creando tu corto
                </h3>
                <h5 className="my-5 text-center text-[17px] font-semibold text-[#505050]">
                    Solo tomará unos segundos
                </h5>
                {/*Barra de progreso*/}
                <div className="mt-8 w-full px-[30px]">
                    <div className="rounde-[10px] h-5.5 w-full overflow-hidden rounded-full bg-[#2F27CE] p-1">
                        <div
                            className="h-3 rounded-full bg-[#2F27CE] transition-all duration-200"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>

                <div className="mx-auto mt-5 mb-15 flex h-auto w-full max-w-[327px] flex-col items-start justify-center gap-3 px-4 text-[15px] sm:px-0 sm:text-[17px]">
                    {steps.map((text, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-[#505050]"
                        >
                            <p className="shrink-0 text-[#505050]">
                                {complete ? <Check /> : <StepIcon />}
                            </p>
                            <p className="text-left">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
