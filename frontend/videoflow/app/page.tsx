import Style from "./components/UI/styles";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import Card from "./components/card/card";
import AppInstructions from "./components/appInstructions/appInstructions";
import BottomSection from "./components/bottomSection/BottomSection";
import Carrusel from "./components/carrusel/carrusel";
export default function Home() {
    return (
        <>
            <section className="relative sm:h-138 flex flex-col justify-start items-start py-10 lg:pt-14 sm:px-8 md:px-16 lg:px-24 transition-all">
                <div className="pl-2 md:pl-13 lg:pl-29">
                    <h1 className="relative z-50 w-63 sm:w-95 md:w-full text-[#000000] text-[18px] sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Converti tus videos <br />
                        horizontales en shorts <br />
                        listos para compartir
                    </h1>

                    <h5 className="relative z-50 w-65 sm:w-110 md:w-125 text-gray-500 text-[10px] sm:text-sm md:text-base mt-4 sm:mt-6 md:mt-8 leading-relaxed">
                        Subí tu video horizontal, seleccioná
                        los mejores momentos y exportá
                        cortos verticales para{" "}
                        <span className="text-gray-800">
                            TikTok, Reels y YouTube Shorts
                        </span>{" "}
                        en segundos.
                    </h5>

                    <div className="mt-6 ">
                        <PrimaryButton />
                    </div>
                </div>

                <Style />
            </section>
            <Carrusel />
            <Card />
            <AppInstructions />
            <BottomSection />
        </>
    );
}
