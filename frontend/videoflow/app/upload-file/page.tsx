"use client";

import { useState } from "react";
import UploadCard from "../components/UploadCard/UploadCard";
import VideoEditor from "../components/VideoEditor/VideoEditor";
import GeneratedVideo from "../components/GeneratedVideo/GeneratedVideo";

const steps = ["Subir", "Seleccionar", "Generar", "Descargar"];

function Timeline({ currentStep }: { currentStep: number }) {
    return (
        <div className="mt-[70px] mb-[80px] flex w-full justify-center px-[20px] sm:px-[48px] md:px-[156px] lg:px-0">
            <div
                className={`flex h-[66px] w-full max-w-[470px] items-start justify-center gap-2 font-semibold text-black sm:gap-4 md:gap-6`}
            >
                {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <div key={stepNumber} className="flex items-start">
                            <div
                                className={`flex flex-col items-center ${index !== 0 && "text-[#797979]"}`}
                            >
                                <div
                                    className={`flex h-[32px] w-[32px] items-center justify-center rounded-full text-sm transition-all duration-300 sm:h-[40px] sm:w-[40px] sm:text-base ${isActive ? "border-4 border-fuchsia-100/60 bg-[#2F27CE] text-white" : isCompleted ? "border border-indigo-600 bg-indigo-100 text-indigo-600" : "border border-gray-300 bg-[#F2F2F7] text-gray-400"} `}
                                >
                                    {stepNumber}
                                </div>

                                <p className="mt-2 text-xs sm:text-sm">
                                    {label}
                                </p>
                            </div>

                            {/* Línea */}
                            {index < steps.length - 1 && (
                                <div className="flex items-center">
                                    <div
                                        className={`mx-1 mt-4 h-[2px] w-[16px] transition-all duration-300 sm:mt-5 sm:w-[30px] md:w-[56px] ${isCompleted ? "bg-indigo-600" : "bg-gray-300"} `}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Upload() {
    const [currentStep, setCurrentStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);

    return (
        <>
            {/* Barra de progreso 1, 2, 3, 4 */}

            {currentStep !== 3 && <Timeline currentStep={currentStep} />}

            {currentStep === 1 && (
                <UploadCard
                    onUploadComplete={(uploadedFile) => {
                        setFile(uploadedFile);
                        setCurrentStep(2);
                    }}
                />
            )}

            {currentStep === 2 && file && (
                <VideoEditor
                    file={file}
                    onGenerate={() => {
                        setCurrentStep(3);
                    }}
                />
            )}

            {currentStep === 3 && (
                <div className="mt-10 text-center text-lg font-semibold">
                    <GeneratedVideo />
                </div>
            )}
            {currentStep === 4 && (
                <div className="mt-10 text-center text-lg font-semibold">
                    <p>Descargar terminar!!!</p>
                </div>
            )}
        </>
    );
}
