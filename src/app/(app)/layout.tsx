import Header from "@/components/header/Header";
import HomeNavigate from "@/components/home/HomeNavigate";
import HomeStatus from "@/components/home/HomeStatus";

export default function Home({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <>
      <Header />
      <main className={""}>
        <div className="flex  text-white justify-between ">
          <div className="w-[308px]   ">
            <HomeNavigate />
          </div>
          <div className="h-[2000px] flex-1 px-[32px]">
            {children}
          </div>
          <div className="w-[308px]">
            <HomeStatus />
          </div>
        </div>
      </main>
    </>
  );
}
