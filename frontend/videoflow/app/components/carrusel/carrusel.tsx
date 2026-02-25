import { Check, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ItemProps = {
    children: ReactNode;
};

export default function Carrusel() {
    return (
        <section className="sponsor-container w-full overflow-hidden bg-[#F2F2F7] py-3 sm:py-3.5">
            <div className="animate-track flex gap-26">
                {/* Grupo 1 */}
                <div className="flex shrink-0 gap-28">
                    <Item>Descarga HD gratuita</Item>
                    <Item>Sin marca de agua</Item>
                    <Item>Reutiliza contenido</Item>
                    <Item>Ahorrá tiempo</Item>
                    <Item>
                        Un video <ArrowRight size={16} />
                        Varios shorts
                    </Item>
                </div>

                {/* Grupo 2 (duplicado para loop infinito) */}
                <div className="flex shrink-0 gap-28">
                    <Item>Descarga HD gratuita</Item>
                    <Item>Sin marca de agua</Item>
                    <Item>Reutiliza contenido</Item>
                    <Item>Ahorrá tiempo</Item>
                    <Item>
                        Un video <ArrowRight size={16} />
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
                className="h-4 w-4 rounded-full bg-[#433BFF] p-0.5 text-white"
                size={18}
            />
            <p className="flex items-center gap-1 text-sm font-medium text-gray-700">
                {children}
            </p>
        </div>
    );
}
