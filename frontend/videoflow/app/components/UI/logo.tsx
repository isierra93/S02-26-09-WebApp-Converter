import Link from "next/link";
import CameraIcon from "./icons/CameraIcon";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <CameraIcon />
            <h3 className="font-inter text-base font-semibold text-black">
                Shortify
            </h3>
        </Link>
    );
}
