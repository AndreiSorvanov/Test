"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AsideHeader } from "@gravity-ui/navigation";
import { Gear } from "@gravity-ui/icons";

export default function Home() {
  return (
    <AsideHeader
      menuItems={[{ id: "1", title: "Title", icon: Gear }]}
      compact={false}
      renderFooter={() => <div>Footer</div>}
    ></AsideHeader>
  );
}
