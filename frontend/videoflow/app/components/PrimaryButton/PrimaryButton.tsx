import { FileVideoCamera } from "lucide-react";
export default function PrimaryButton() {
    return (
        <button className="flex items-center justify-center gap-2 w-30 sm:w-40  mt-8 sm:mt-10 md:mt-12 bg-[#2F27CE] text-[#FAFAFA] hover:bg-[#433BFF]  p-3 rounded-[10px] cursor-pointer active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.3,-0.05,0.7,-0.5)]">
            <FileVideoCamera className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-semibold">
                Subir video
            </span>
        </button>
    );
}
