import { SearchBar } from "@/components";

function Header() {
    return(
        <header className="w-full h-20 flex item-center p-6 gap-6">
                    <div className="w-1/2 flex items-center justify-start gap-6 bg-neutral-300">
                        {/*로고 영역 */}
                        <div className="h-full flex items-center justify-center gap-2">
                            {/* 아이콘 */}
                            <img src="" alt="" className="h-10"></img>
                            {/* 폰트 로고 */}
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Weather.io
                            </h3>
                        </div>
                        {/*검색창 영역 */}
                        <SearchBar placeholder="검색할 지역 이름을 영어로 입력하세요" className="flex-1"></SearchBar>
                    </div>
                </header>
    );
}

export {Header};
//디폴트는이름없이내보냄