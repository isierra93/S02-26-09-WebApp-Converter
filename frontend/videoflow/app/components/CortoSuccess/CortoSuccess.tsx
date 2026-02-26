"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SuccessIcon from "../UI/icons/Success";

export default function CortoSuccess() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/Download"); 
        }, 2000); 

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="mt-20 flex w-full justify-center px-5 sm:px-12 md:px-39 lg:px-91 2xl:px-151">
            <div className="w-full rounded-2xl border-[0.25px] border-gray-300/90 bg-[#F2F2F7] text-center shadow-[0px_4px_17.6px_0px_#0000001A] sm:w-180 ">
                <h2 className="my-20 text-[27px] font-semibold text-[#000000]">
                    Corto creado con éxito
                </h2>

                <div className="mb-20 flex justify-center">
                    <SuccessIcon />
                </div>
            </div>
        </div>
    );
}
