import { ReactNode } from "react";

export default function ProductList({ children }: { children: ReactNode }){
    return (
        <div className="grid grid-cols-3 justify-between gap-3">
            {children}
        </div>
    );
}