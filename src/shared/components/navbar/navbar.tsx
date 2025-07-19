import LogoIcon from "@/shared/icons/logo";
import { ButtonVariant, NavbarVariant } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export interface NavbarLink {
    href: string;
    label: string;
    variant: ButtonVariant;
}

interface NavbarProps {
    className?: string;
    variant?: NavbarVariant;
    links?: NavbarLink[];
}

export const Navbar: FC<NavbarProps> = ({ className, variant = "default", links }) => {

    const navbarClasses = clsx({
        "bg-background text-foreground [&_svg_path]:fill-accent": variant === "default",
        "bg-accent text-background [&_svg_path]:fill-background": variant === "accent",
    })

    const renderLinks = () => {
        return links?.map((link) => (
            <Link key={link.href} href={link.href} className={`${link.variant}`}>
                {link.label}
            </Link>
        ));
    };

    return (
        <header className={`flex items-center px-4 h-16 ${navbarClasses} ${className}`}>
            <Link href="/">
                <LogoIcon />
            </Link>
            {
                links && links.length > 0 &&
                <div className="flex gap-4 ml-auto">
                    {renderLinks()}
                </div>
            }
        </header>
    )
}
