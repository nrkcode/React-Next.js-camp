/**공통 컴포넌트 */
//헤더파일
export { Header } from "./common/header/Header";

/** HOME 페이지에서 관리하는 컴포넌트 */
export { GetTodayWidget } from "./home/GetTodayWidget";
export { GetHourlyWidget } from "./home/GetHourlyWidget";
export { GetKakaoMapWidget } from "./home/GetKakaoMapWidget";

/**UI기초 컴포넌트 */
export { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
export { Button, buttonVariants } from "./ui/button";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent,} from "./ui/card";
export { Input } from "./ui/input";
export { Separator } from "./ui/separator";
export { SearchBar }from "./ui/search-bar";

/** TEST CODE */
export { GetSunriseAndSunset } from "./home/GetSunriseAndSunset";
export { GetWavesWidget } from "./home/GetWavesWidget";
export { GetTodayHighlightsWidget } from "./home/GetTodayHighlightsWidget";
export { GetDaysWidget } from "./home/GetDaysWidget";