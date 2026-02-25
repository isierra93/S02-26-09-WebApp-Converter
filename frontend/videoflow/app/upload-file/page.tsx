"use client";

import { useState } from "react";
import UploadCard from "../components/UploadCard/UploadCard";
import VideoEditor from "../components/VideoEditor/VideoEditor";
import GeneratedVideo from "../components/GeneratedVideo/GeneratedVideo";
import CortoSuccess from "../components/CortoSuccess/CortoSuccess";

const steps = ["Subir", "Seleccionar", "Generar", "Descargar"];

function Timeline({ currentStep }: { currentStep: number }) {
    return (
        <div className="mt-17.5 mb-20 flex w-full justify-center px-5 sm:px-12 md:px-39 lg:px-0">
            <div
                className={`flex h-16.5 w-full max-w-117.5 items-start justify-center gap-2 font-semibold text-black sm:gap-4 md:gap-6`}
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
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-300 sm:h-10 sm:w-10 sm:text-base ${isActive ? "border-4 border-fuchsia-100/60 bg-[#2F27CE] text-white" : isCompleted ? "border border-indigo-600 bg-indigo-100 text-indigo-600" : "border border-gray-300 bg-[#F2F2F7] text-gray-400"} `}
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
                                        className={`mx-1 mt-4 h-0.5 w-4 transition-all duration-300 sm:mt-5 sm:w-7.5 md:w-14 ${isCompleted ? "bg-indigo-600" : "bg-gray-300"} `}
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

           <Timeline currentStep={currentStep} />

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
                <div className="text-center mt-10 text-lg font-semibold">
                    <GeneratedVideo
                        onGenerate={() => {
                            setCurrentStep(4);
                        }}
                    />
                </div>
            )}
            {currentStep === 4 && (
                <div className="text-center mt-10 text-lg font-semibold">
                    <CortoSuccess />
                </div>
            )}
        </>
    );
}
