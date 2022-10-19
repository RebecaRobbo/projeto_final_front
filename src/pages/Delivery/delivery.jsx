import { useEffect } from "react";

export const Delivery = () => {
    useEffect(() => {
        document.title = 'Delivery';
    });

    return (
        <>
            <body>
                <div className="top">
                    <h1>Retirada do pedido</h1>
                    <p>Horário da retirada: </p>

                </div>
            </body>
        </>
    );
}