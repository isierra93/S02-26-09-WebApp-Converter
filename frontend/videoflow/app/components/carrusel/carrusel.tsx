import { Check, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ItemProps = {
    children: ReactNode;
};

export default function Carrusel() {
    return (
        <section className="max-w-screen bg-[#F2F2F7] py-3 sm:py-3.5 sponsor-container">
            <div className="animate-track gap-26">
                
                <div className="flex gap-28 shrink-0">
                    <Item>Descarga HD gratuita</Item>
                    <Item>Sin marca de agua</Item>
                    <Item>Reutiliza contenido</Item>
                    <Item>Ahorrá tiempo</Item>
                    <Item>
                        Un video <ArrowRight size={16} />
                        Varios shorts
                    </Item>
                </div>

                
                <div className="flex gap-28 shrink-0">
                    <Item>Descarga HD gratuita</Item>
                    <Item>Sin marca de agua</Item>
                    <Item>Reutiliza contenido</Item>
                    <Item>Ahorrá tiempo</Item>
                    <Item>
                        Un video <ArrowRight size={16} />{" "}
                        Varios shorts
                    </Item>
                </div>
            </div>
        </section>
    );
}

function Item({ children }: ItemProps) {
    return (
        <div className="flex items-center gap-2 whitespace-nowrap">
            <Check
                className="bg-[#433BFF] h-4 w-4 rounded-full text-white p-0.5"
                size={18}
            />
            <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
                {children}
            </p>
        </div>
    );
}
