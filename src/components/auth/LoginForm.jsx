"use client";

import { useActionState, useState } from "react";
import { authenticateAdmin } from "@l/actions/auth-actions";

const initialState = {
  error: null,
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    authenticateAdmin,
    initialState
  );
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="flex flex-col gap-5 w-full">
      {state?.error && (
        <div
          role="alert"
          className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-tif-acc-coral-50 border border-tif-acc-coral-300 text-tif-acc-coral-800 text-xs sm:text-sm font-medium"
        >
          <i
            className="fa-regular fa-circle-exclamation text-tif-acc-coral-600 shrink-0"
            aria-hidden="true"
          />
          <span>{state.error}</span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className="text-xs sm:text-sm font-semibold text-tif-text"
        >
          Username
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-4 text-tif-text-muted pointer-events-none">
            <i className="fa-regular fa-user text-sm" aria-hidden="true" />
          </span>
          <input
            id="username"
            name="username"
            type="text"
            required
            autoComplete="username"
            placeholder="Masukkan username admin"
            disabled={isPending}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-tif-border/40 bg-tif-bg text-tif-text text-sm placeholder:text-tif-text-muted/70 focus:outline-none focus:ring-2 focus:ring-tif-secondary focus:border-tif-primary transition-all disabled:opacity-60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-xs sm:text-sm font-semibold text-tif-text"
        >
          Password
        </label>
        <div className="relative flex items-center">
          <span className="absolute left-4 text-tif-text-muted pointer-events-none">
            <i className="fa-regular fa-lock text-sm" aria-hidden="true" />
          </span>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="Masukkan password"
            disabled={isPending}
            className="w-full pl-11 pr-11 py-3 rounded-xl border border-tif-border/40 bg-tif-bg text-tif-text text-sm placeholder:text-tif-text-muted/70 focus:outline-none focus:ring-2 focus:ring-tif-secondary focus:border-tif-primary transition-all disabled:opacity-60"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={
              showPassword ? "Sembunyikan password" : "Tampilkan password"
            }
            className="absolute right-3.5 text-tif-text-muted hover:text-tif-text transition-colors p-1 cursor-pointer"
          >
            <i
              className={`fa-regular ${
                showPassword ? "fa-eye-slash" : "fa-eye"
              } text-sm`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-tif-primary hover:bg-tif-acc-indigo text-tif-text-inverse font-semibold text-sm py-3.5 px-6 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
      >
        {isPending ? (
          <>
            <i
              className="fa-regular fa-spinner-third fa-spin text-tif-secondary"
              aria-hidden="true"
            />
            <span>Memproses Login...</span>
          </>
        ) : (
          <>
            <span>Masuk ke Dashboard</span>
            <i
              className="fa-regular fa-arrow-right text-tif-secondary text-xs"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
}
