import { AppMenu } from "@/components/shared";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {



    return (
        <div className="layout">
            <div className="h-[60px] stack-row items-center bg-zinc-950 px-4">
                <h1 className="text-white">Amin</h1>
            </div>
            <div className="stack-row flex-1">
                <div className="lg:w-[250px] h-full bg-zinc-800">
                    <AppMenu />
                </div>
                <div className="flex-1 h-[calc(100vh-60px)] bg-zinc-50 overflow-y-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}