import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  feed,
  sidebar,
}: {
  children: ReactNode;
  feed: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href={"/parallel"}>패러렐</Link>
        &nbsp;
        <Link href={"/parallel/setting"}>패러렐세팅</Link>
      </div>
      <br />
      {sidebar}
      {feed}
      {children}
    </div>
  );
}
