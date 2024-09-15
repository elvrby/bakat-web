"use client"
import React, { useState } from "react";
import HeaderComponent from "@/src/components/header";
import IndexComponent from "@/src/components/index";

// functions
import { useUserSession } from "@/src/hooks/use-user-session"
import FloatingLoginComponent from "@/src/components/floatinglogin";

export default function Home() {
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Assuming you might have a session value, you can set it here
  const session = null; // Replace this with the actual session value if available
  const userSessionId = useUserSession(session);

  const handleShowLogin = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };
  return (
    <main>
      <HeaderComponent onLoginClick={handleShowLogin} />
      <IndexComponent></IndexComponent>
      {isLoginVisible && <FloatingLoginComponent close={handleCloseLogin} session={userSessionId} />}
    </main>
  );
}
