import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SiteHeader() {
  return (
    <header className="p-6 flex flex-col justify-start h-(--header-height) border-b shrink-0 items-center gap-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 lg:gap-2">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="ml-auto flex items-center gap-2 mr-4">
          <p className="font-semibold">Admin</p>
          <Avatar className="size-10">
            <AvatarImage src={``} />
            <AvatarFallback className="text-xs font-semibold">
              LN
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="w-full space-y-1">
        <p className="text-sm font-semibold">
          Welcome back, Admin! Here&apos;s what&apos;s happening with your
          platform today.
        </p>
      </div>
    </header>
  );
}
