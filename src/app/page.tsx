"use client";

import { useCallback, useMemo, useState } from "react";
import Logo from "@/components/Logo";
import NumberButton from "@/components/NumberButton";
// opsional dekorasi foto: import BackgroundGallery from "@/components/BackgroundGallery";

const MAX_LIVES = 3;
const NUMBERS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Page() {
  const [secret, setSecret] = useState<number>(() => Math.floor(Math.random() * 10) + 1);
  const [lives, setLives] = useState<number>(MAX_LIVES);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  const [attempts, setAttempts] = useState<number[]>([]);
  const last = attempts[attempts.length - 1];

  const resetGame = useCallback(() => {
    setSecret(Math.floor(Math.random() * 10) + 1);
    setLives(MAX_LIVES);
    setStatus("playing");
    setAttempts([]);
  }, []);

  const handlePick = useCallback(
    (n: number) => {
      if (status !== "playing") return;
      if (attempts.includes(n)) return;

      const nextAttempts = [...attempts, n];
      setAttempts(nextAttempts);

      if (n === secret) {
        setStatus("won");
        return;
      }
      setLives((v) => {
        const next = v - 1;
        if (next <= 0) setStatus("lost");
        return next;
      });
    },
    [status, attempts, secret]
  );

  const title = useMemo(() => {
    if (status === "won") return "🏆 Kamu Menang!";
    if (status === "lost") return "Game Over";
    return "Tebak Angka!";
  }, [status]);

  const message = useMemo(() => {
    if (status === "won") return `🎉 Selamat! Angka ${secret} benar!`;
    if (status === "lost") return `💔 Game Over! Angka yang benar adalah ${secret}`;
    if (last == null) return "Pilih angka antara 1–10!";
    const hint = last < secret ? "terlalu kecil" : "terlalu besar";
    return `Angka ${last} ${hint}! Sisa ${lives} nyawa`;
  }, [status, last, secret, lives]);

  return (
    <>
      {/* <BackgroundGallery />  // aktifkan kalau mau dekorasi foto */}
  <div className="min-h-screen relative overflow-hidden">
        {/* blob lembut */}
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full blur-2xl"></div>
        </div>

        <main className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Logo />
            </div>

            {/* Card */}
            <section
              className={[
                "bg-white/90 backdrop-blur-sm rounded-2xl border border-yellow-200/50 shadow-2xl px-8 md:px-10 py-10",
                status === "won" ? "bounce-in" : "",
                status === "lost" ? "shake" : "",
              ].join(" ")}
            >
              <div className="px-8 pt-8 text-center">
                <h2 className="text-2xl text-gray-800">
                  {status === "won" ? (
                    <div className="flex items-center justify-center gap-3 text-yellow-600">
                      <span>🏆</span> Kamu Menang! <span>🏆</span>
                    </div>
                  ) : (
                    title
                  )}
                </h2>

                {/* Lives */}
                <div className="flex justify-center gap-2 mt-6 text-2xl">
                  {Array.from({ length: MAX_LIVES }).map((_, i) => (
                    <span key={i} className={i < lives ? "text-red-500 heart-beat" : "text-gray-300"}>
                      ❤️
                    </span>
                  ))}
                </div>

                {/* Message */}
                <p className="mt-6 text-lg text-gray-700 font-medium">{message}</p>
              </div>

              {/* Angka */}
              {status === "playing" && (
                <div className="px-8 pb-4 pt-8">
                  <div className="grid grid-cols-5 grid-rows-2 gap-x-12 gap-y-10 place-items-center">
                    {NUMBERS.map((n) => (
                      <NumberButton
                        key={n}
                        value={n}
                        onClick={handlePick}
                        disabled={status !== "playing"}
                        used={attempts.includes(n)}
                        active={last === n}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tebakan */}
              <div className="px-8 pt-2 pb-6">
                <div className="space-y-3">
                  <p className="text-center text-base text-gray-600 font-medium">Tebakan:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {attempts.length === 0 && (
                      <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-500">—</span>
                    )}
                    {attempts.map((g, i) => {
                      const correct = status !== "playing" && g === secret;
                      return (
                        <span
                          key={`${g}-${i}`}
                          className={
                            "px-4 py-2 text-base font-semibold rounded-full " +
                            (correct
                              ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg"
                              : "bg-gray-200 text-gray-600")
                          }
                        >
                          {g}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent" />

                {/* Stats & CTA */}
                <div className="mt-6 flex flex-col items-center gap-4">
                  {status !== "playing" && (
                    <button
                      onClick={resetGame}
                      className="inline-flex items-center gap-2 rounded-xl px-10 py-3 text-lg font-semibold
                                 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600
                                 text-white shadow-lg hover:shadow-xl transition"
                    >
                      ⟳ Main Lagi
                    </button>
                  )}
                  <div className="grid grid-cols-2 gap-12 text-center">
                    <div>
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                        {attempts.length}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">Tebakan</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-500">{lives}</p>
                      <p className="text-sm text-gray-600 font-medium">Nyawa</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="text-center mt-8">
              <div className="flex items-center justify-center gap-3 text-base text-amber-700 font-medium">
                <span className="text-yellow-500">✨</span>
                <span>Al-Fath FIF - Universitas Telkom</span>
                <span className="text-yellow-500">✨</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
