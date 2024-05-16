import { ModeToggle } from "../ToggleModeScreen";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function Header() {
    return (
        <header className="flex justify-center pb-4 pt-5 ml-5 mr-5">
            <div className="flex justify-between w-full max-w-screen-lg">
                <div>
                    <ItemsNavbar />
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}

function ItemsNavbar() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about" >
                            <h6 className="text-green-600 text-base">About</h6>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Popover>
                            <PopoverTrigger className="text-green-600 text-base">Me</PopoverTrigger>
                            <PopoverContent className="flex gap-3 items-center">
                                <BreadcrumbLink href="https://github.com/PineberryCode">
                                    <Avatar>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/88601032?v=4" alt="@avatarMND" />
                                        <AvatarFallback>MND</AvatarFallback>
                                    </Avatar>
                                    <Label>
                                        <h6 className="text-green-600 mt-3">MINDLUNNY</h6>
                                    </Label>
                                </BreadcrumbLink>
                            </PopoverContent>
                        </Popover>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </>
    );
}
