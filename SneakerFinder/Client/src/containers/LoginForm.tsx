import React from "react";
import AuthInput from "@/components/AuthInput";

export default function LoginForm() {
  return (

      <div className="bg-red-600">
          <AuthInput
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            required
          />
      </div>

  );
}
