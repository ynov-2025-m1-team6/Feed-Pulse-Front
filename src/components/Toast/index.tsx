import React, { useEffect } from "react";
import styles from "./toast.module.scss";

type Props = {
    variant?: "info" | "success" | "error" | "warning";
    label: string;
    close: () => void;
    duration?: number;
    isOpen: boolean;
    position?: "top__right" | "top__left" | "bottom__right" | "bottom__left";
};

const Index = ({ variant = "info", label, close, duration = 1000, isOpen, position }: Props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            close();
        }, duration);

        return () => clearTimeout(timer);
    }, [close, duration]);

    return (
        <div className={`${styles.wrapper} ${styles[variant]} ${isOpen && styles.open} ${position ? styles[position] : "top__right"}`} onClick={close}>
            <p>{label}</p>
        </div>
    );
};

export default Index;