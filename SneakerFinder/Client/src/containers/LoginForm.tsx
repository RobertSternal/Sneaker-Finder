import React from "react";
import AuthInput from "@/components/AuthInput";

export default function LoginForm() {
  return (
    <main>
      <div>
        <form className="space-y-6" action="#" method="POST">
          <AuthInput
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
          />
        </form>
      </div>
    </main>
  );
}
