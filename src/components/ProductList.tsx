import { ReactNode } from "react";

export default function ProductList({ children }: { children: ReactNode }){
    return (
        <div>
            {children}
        </div>
    );
}