"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AsideHeader } from "@gravity-ui/navigation";
import { Gear } from "@gravity-ui/icons";
import { LoginButton } from "@telegram-auth/react";

export default function Home() {
  return (
    <>
      <AsideHeader
        menuItems={[{ id: "1", title: "Title", icon: Gear }]}
        compact={false}
        renderFooter={() => <div>Footer</div>}
      ></AsideHeader>
      <LoginButton
        botUsername="qwqwqwqwqwqwqwqwqwqwqbot"
        onAuthCallback={(data) => {
          console.log(data);
          // call your backend here to validate the data and sign in the user
        }}
      />
    </>
  );
}
