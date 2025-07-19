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
    username?: string;
}

export const Navbar: FC<NavbarProps> = ({ className, variant = "default", links, username }) => {

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
                <div className="flex gap-2 ml-auto">
                    {renderLinks()}
                </div>
            }
            {
                username && (
                    <div className="flex flex-row items-center gap-2 ml-auto">
                        <div className="flex items-center justify-center bg-accent aspect-square h-10 rounded-md">
                            <span className="text-xl font-bold text-background">{username.split(" ").map((word) => word[0]).join("")}</span>
                        </div>
                        <Link href="/dashboard" className="font-bold hidden md:block">
                            Hola, {username}
                        </Link>
                    </div>
                )
            }
        </header>
    )
}
