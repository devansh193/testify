import { Stamp } from "lucide-react";

interface LogoProps {
    name: boolean;
}

export const Logo = ({ name }: LogoProps) => {
    return (
        <div className="px-2 py-1 border-2 rounded-full flex items-center justify-center text-white">
            <Stamp className="text-blue-500" />
            {name && <h1 className="text-lg font-semibold">Testify</h1>}
        </div>
    );
};
