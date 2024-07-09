import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface FilterOrderProps {
    text?: string
}
export default function FilterOrder({ text }: FilterOrderProps) {
    return (
        <div>
            <NavigationMenu className="border-solid border border-lightGray rounded-md w-full flex justify-start">
                <NavigationMenuList className="w-full">
                    <NavigationMenuItem className="w-full">
                        <NavigationMenuTrigger className="w-full">{text}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
